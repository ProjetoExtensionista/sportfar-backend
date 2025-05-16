import { compare, genSalt, hash } from 'bcrypt';

const saltRounds = 10;

export async function encrypt(text: string): Promise<string> {
  const salt = await genSalt(saltRounds);

  return hash(text, salt);
}

export async function compareText(text: string, encryptText: string) {
  return compare(text, encryptText);
}
