const { createUser } = require("../model/user");


exports.createUser = async (username, email, password) => {
    try {
        const userId = Date.now();
        return await createUser(userId, username, email, password);
    } catch (error) {
        throw error;
    }
};