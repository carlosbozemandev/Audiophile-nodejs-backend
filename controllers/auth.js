const { createUser, findUser } = require("../model/user");
const bcrypt = require("bcrypt");


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
            return("User Successfullt logged in");
        }
        else{
            return("Invalid email or password!");
        }
    } catch (error) {
        throw error;
    }
};