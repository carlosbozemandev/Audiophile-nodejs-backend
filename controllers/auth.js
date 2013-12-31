const { createUser, findUser } = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../data/key");

exports.createUser = async (username, email, password) => {
    try {
        const userId = Date.now();
        const encPassword = await bcrypt.hash(password, 12);
        return await createUser(userId, username, email, encPassword);
    } catch (error) {
        throw error;
    }
};

exports.login = async (email, password) => {
    try {
        const user = await findUser(email);
        const verify = await bcrypt.compare(password, !!user && user.password)
        if(verify){
            const token = jwt.sign({email}, SECRET_KEY, { expiresIn: '1h' });
            return {token};
        }
        else{
            return("Invalid email or password!");
        }
    } catch (error) {
        throw error;
    }
};