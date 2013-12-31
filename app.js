const express = require("express");
const auth = require("./routes/auth");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/auth", auth);

app.use("/", (req, res, next)=>{
    res.send("Hello From Server");
    next();
});

app.listen(3001, () => {
    console.log("Server started at: http://localhost:3001/");
});