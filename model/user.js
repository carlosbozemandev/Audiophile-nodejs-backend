const path = require("path");
const fs = require("fs");

const jsonPath = path.join(process.cwd(), "data", "users.json");

const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonPath, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(data.toString()));
            }
        });
    });

};

const writeData = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(jsonPath, data, (data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.stringify(data));
            }
        });
    });
};

exports.createUser = async (userId, username, email, password) => {
    try {
        const users = await readData();
        const matched = users.find(userId === userId);
        if (matched) {
            throw new Error("User already Exists!");
        }
        else {
            await writeData([...data, { userId, username, email, password }]);
            return ("User Successfully Created");
        }
    } catch (error) {
        throw error;
    }

};