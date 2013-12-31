const express = require("express");
const auth = require("./routes/auth");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/auth", auth);

app.listen(3000, () => {
    console.log("Server started at: http://localhost:3000/");
});