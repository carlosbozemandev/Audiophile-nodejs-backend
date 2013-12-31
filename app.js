const express = require("express");
const auth = require("./routes/auth");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", auth);

app.use("/", async (req, res, next) => {
    const token = req.headers['Authorization'] ? req.headers['Authorization'] : req.headers['authorization'] ? req.headers['authorization'] : '';

    const verified = await jwt.verify(token, 'shhhh');

    if (token && verified) {
        res.status(200).send('authorized');
        next();
    } else {
        res.status(401).send('kon hai bay tu?')
    }
});

app.listen(3001, () => {
    console.log("Server started at: http://localhost:3001/");
});