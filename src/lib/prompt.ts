export const getPrompt = (description: string): string =>
`
Create a card JSON object based on a potentially vague user description. It must have Name, Description, Cost, and Effect Description. All cards are either spells or creatures.

Please be creative and imaginative in creating the card. The description should be like flavor text - rich and fantastical if necessary, or humorous and memorable. The effect description is where you can fully describe in natural language the mechanics, effects, and details of the card and abilities. If it is a creature, the effect description should explicitly state so, and give some indication of the ability it has if necessary.

Example:
User Description: "I want a card that summons a mystical creature to aid in battle."

{
  name: 'Summon Mystical Guardian',
  description: 'An ancient spell discovered in recent years. It claims to call mystical guardians from another universe to aid the caster.',
  cost: 4,
  effect: 'Summons a mystical guardian that prevents other cards from being played while it is alive.'
};

User  Description: ${description}
`
