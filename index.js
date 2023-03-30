import { encrypt, decrypt } from "./hash.js";
import express from "express"; // import the Express framework
import fs from "fs/promises"; // import the fs module for working with the file system
import cors from "cors"; // import the CORS middleware for allowing cross-origin resource sharing
("========================================================= [ Express app ] =========================================================");
const app = express(); // create an instance of the Express app
app.use(cors()); // Enable CORS middleware
("========================================================= [ Set up routes ] =========================================================");
// define a route for the homepage
app.get("/", (req, res) => {
  res.send("Hello, world!"); // send a simple response
});
("========================================================= [ define a route for handling login requests ] =========================================================");
app.get("/login", async (req, res) => {
  const { username, password } = req.query; // get the username and password from the request query
  console.log(username, password); // log the username and password to the console

  // Save username and password to JSON file
  const data = { username, password }; // create an object with the username and password
  const jsonData = JSON.stringify(data); // convert the object to a JSON string
  try {
    await fs.writeFile("users.json", jsonData); // write the JSON data to a file called "users.json"
    console.log("Username and password saved to users.json"); // log a message to the console
  } catch (err) {
    console.error("Error writing to users.json:", err); // log an error message if there was a problem writing to the file
    return res.status(500).send("Internal server error"); // send an error response to the client
  }

  // Read username and password from JSON file
  try {
    const fileData = await fs.readFile("users.json"); // read the JSON data from the file
    const userData = JSON.parse(fileData); // parse the JSON data into an object
    const storedUsername = userData.username; // get the stored username
    const storedPassword = userData.password; // get the stored password
    const encryptedPassword = encrypt(storedPassword);
    const decryptedPassword = decrypt(encryptedPassword);
    res.send({
      excrypted: {
        user: storedUsername,
        pass: encryptedPassword,
      },
      decrypted: {
        user: storedUsername,
        pass: decryptedPassword,
      },
    }); // send a response with the stored username and password
  } catch (err) {
    console.error("Error reading from users.json:", err); // log an error message if there was a problem reading from the file
    return res.status(500).send("Internal server error"); // send an error response to the client
  }
});
("========================================================= [ Start server ] =========================================================");
const PORT = process.env.PORT || 3000; // get the port number from an environment variable or use 3000 as the default
app.listen(PORT, () => {
  // start the server
  console.log(`Server started http://localhost:${PORT}`); // log a message to the console
});
