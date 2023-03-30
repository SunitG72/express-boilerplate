import { encrypt, decrypt } from "../hash.js";

const password = "password"
const encryptedPassword = encrypt(password);
const decryptedPassword = decrypt(encryptedPassword);

console.log("ENCRYPTED PASSWORD: ", encryptedPassword);
console.log("DECRYPTED PASSWORD: ", decryptedPassword);
