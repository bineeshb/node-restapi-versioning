import { ParsedData } from '../interfaces/parsedData';

export function parseWithDelimiter(input: string): ParsedData | null {
  const details = input.split(/([a-zA-Z]+0+)/).filter(value => !!value);

  if (details?.length === 3) {
    const [ firstName, lastName, clientID ] = details;

    return { firstName, lastName, clientID };
  }

  return null;
};
