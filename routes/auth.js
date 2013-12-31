const express = require("express");
const { createUser } = require("./../controllers/auth");

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        await createUser(req.body.username, req.body.email, req.body.password);
        res.status(200).send("User Successfully Created!");
    } catch (error) {
        res.send(error);
    }

});

router.post("/login", (req, res) => {
});

module.exports = router;