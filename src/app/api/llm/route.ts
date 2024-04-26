import { NextRequest, NextResponse } from 'next/server';
import { createCard } from './LLM';

export const POST = async (req: NextRequest) => {
    try {
      const { description } = await req.json();
      if (!description) {
        return NextResponse.json({ error: 'Description is required' });
      }
      const card = await createCard(description);
      return NextResponse.json(card);
    } catch (error) {
      return NextResponse.json({ error: 'Failed to create card: ' + error});
    }
};

