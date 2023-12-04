const express = require("express");
const server = express();
const sqlite3 = require("sqlite3").verbose();

server.use(express.json())
            .use(express.urlencoded({ extended: false }))
            .use((req, res, next) => {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', '*');
                res.header('Access-Control-Allow-Methods', '*');
                next();
            });

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// // server.get("/users", (req, res) => {
// //     const db = new sqlite3.Database("./gik339-labb2.db");
// //     db.all("SELECT * FROM users", (err, rows) => {
// //         if (err) {
// //             console.error(err.message);
// //             res.status(500).send(err);
// //         } else {
// //             res.send(rows);
// //         }
// //     });
// // });

// GET request hanterare
server.get("/users", (req, res) => {
    // Skapar en databaskoppling
    const db = new sqlite3.Database("./gik339-labb2.db");

    // Ställer en fråga mot databasen
    db.all("SELECT * FROM users;", (err, rows) => {
        // Hanterar eventuella fel och skickar datan som svar
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send(rows);
        }
    });

    // Glöm inte att stänga databaskopplingen
    db.close();
});

server.get("/", (req, res) => {
    // Leave the callback function empty for now
});
