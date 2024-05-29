export type Position = { x: number; y: number };

// Define a type for languages
export type Language = 'en' | 'sv';

export const enum Cardinal { North, East, South, West };
export const enum CommandName { Forward, Left, Right };

interface Commands<T extends Language> {
  getCommandName(commandLetter: string, language: T): CommandName;
}

// Define a function to get a command
export const getCommandName = <T extends Language>(commandLetter: string, language: T): CommandName => {
  return (CommandTranslations[language] as { [key: string]: CommandName })[commandLetter?.toUpperCase()];
}

// Define a type for command translations
const CommandTranslations = {
  'en': {
    'F': CommandName.Forward,
    'L': CommandName.Left,
    'R': CommandName.Right
  },
  'sv': {
    'G': CommandName.Forward,
    'V': CommandName.Left,
    'H': CommandName.Right
  }
}

// Define a function to get a command
export const getCardinalName = <T extends Language>(cardinal: Cardinal, language: T): string => {
  return (CardinalTranslations[language] as { [key: number]: string })[cardinal];
}

// Define a type for command translations
const CardinalTranslations = {
  'en': {
    0: 'North',
    1: 'East',
    2: 'South',
    3: 'West'
  },
  'sv': {
    0: 'Norr',
    1: 'Öst',
    2: 'Syd',
    3: 'Väst'
  }
}
