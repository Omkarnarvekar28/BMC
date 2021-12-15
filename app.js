const express = require("express");
const port = process.env.PORT || "3000";
const path = require('path');
const cors = require("cors");

const app = express();

let corsOptions = {
    origin: `http://localhost:42265`
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    // res.json({ message: "Welcome to Doshaheen application." });
});

app.use(require('./src/routes.js'));
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});