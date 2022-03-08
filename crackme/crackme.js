const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const bcrypt = require("bcrypt");

const HASHED_PASSWORD =
    "$2b$10$Reb1EYjiIOdNhedRS3NrD.lz/G26o6jL73GpdBz7Gz9FbdkJfosDu";

const run = (first) => {
    const promptMsg = first
        ? "Input password :"
        : "Wrong password, try again :";
    readline.question(promptMsg, (password) => {
        checkPassword(password, (err, res) => {
            if (res) {
                console.log("Password is correct!");
                process.exit(0);
            }
            run(false);
        });
    });
};

const checkPassword = (password, cb) => {
    bcrypt.compare(password, HASHED_PASSWORD, (err, res) => {
        return cb(err, res);
    });
};

run(true);