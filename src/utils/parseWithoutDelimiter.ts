import { ParsedData } from '../interfaces/parsedData';

export function parseWithoutDelimiter(input: string): ParsedData | null {
  const details = input.split(/([a-zA-Z]+)0+/).filter(value => !!value);

  if (details[2]?.length > 3) {
    details[2] = `${details[2].slice(0, 3)}-${details[2].slice(3)}`
  }

  if (details?.length === 3) {
    const [ firstName, lastName, clientID ] = details;

    return { firstName, lastName, clientID };
  }

  return null;
};
