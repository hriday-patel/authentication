import crypto from "crypto";

export async function passwordHashing(
  password: string,
  salt: string
): Promise<string> {
  return new Promise((res, rej) => {
    crypto.scrypt(password, salt, 32, (err, hash) => {
      if (err) rej(err);
      res(hash.toString("hex").normalize());
    });
  });
}


export function generateSalt() {
  return crypto.randomBytes(16).toString("hex").normalize();
}
