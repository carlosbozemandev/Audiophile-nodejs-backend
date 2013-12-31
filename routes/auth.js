const express = require("express");
const { createUser, login } = require("./../controllers/auth");

const router = express.Router();

router.post("/signup", async (req, res) => {
    // validate input/body/params
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.status(400).send("Invalid body");
    }
    if (!req.body.email.includes('@')) {
        res.status(400).send("Must be an email");
    }

    // change db or perform functionality
    // return appropiate response
    try {
        const resp = await createUser(req.body.username, req.body.email, req.body.password);
        res.status(200).send(resp);
    } catch (error) {
        res.status(400).send(error);
    }

});

router.post("/login", async (req, res) => {
    try {
        const resp = await login(req.body.email, req.body.password);
        console.log('res', resp)
        res.status(200).send(resp);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;