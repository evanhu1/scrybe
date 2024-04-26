"use client"

import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  imageUrl?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ className, title, description, imageUrl, ...props }) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 flex flex-col space-y-1.5 p-6 ${className}`}
      onClick={async () => {
        const description = prompt(
          "Please enter a description for the card:"
        );
        if (description) {
          const cardResult = await fetch('/api/llm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description })
          }).then(res => res.json());
          console.log(cardResult);
        }
      }}
      {...props}
    >
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />}
      <h3
        className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      >
        {title}
      </h3>
      <p
        className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}
      >
        {description}
      </p>
    </div>
  );
};

Card.displayName = "Card";

export { Card as UICard };
