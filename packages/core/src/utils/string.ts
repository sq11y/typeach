/**
 * Checks if a character is a printable
 * character - e.g. A-Z.
 */
export const isPrintableCharacter = (character: string): boolean => {
  return character.match(/^[\P{Cc}\P{Cn}\P{Cs}]$/u) !== null;
};

/**
 * Checks if a character is a printable
 * character which is not space.
 */
export const isTypeaheadCharacter = (character: string): boolean => {
  return isPrintableCharacter(character) && character !== " ";
};

/**
 * Checks if a string is just
 * a repeating character.
 */
export const isRepeatingCharacter = (string: string, character: string): boolean => {
  return string.length > 1 && string.split("").every((char) => char === character);
};

/**
 * Case-independent check if a string
 * `startsWith` a search.
 */
export const startsWith = (string: string, search: string): boolean => {
  return !!string?.trim().toLowerCase().startsWith(search.trim().toLowerCase());
};
