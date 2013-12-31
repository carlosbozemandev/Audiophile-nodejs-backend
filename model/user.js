const path = require("path");
const fs = require("fs");

const jsonPath = path.join(process.cwd(), "data", "users.json");

const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonPath, (err, data) => {
            if (err) {
                return reject(err);
            }
            else {
                resolve(JSON.parse(data.toString()));
            }
        });
    });

};

const writeData = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(jsonPath, JSON.stringify(data), (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};

exports.createUser = async (userId, username, email, password) => {
    try {
        const users = await readData();
        const matched = users.find(user => user.email === email);
        if (matched) {
            throw new Error("User already Exists!");
        }
        else {
            await writeData([...users, { userId, username, email, password }]);
            return ("User Successfully Created");
        }
    } catch (error) {
        throw error;
    }

};

exports.findUser = async (email) => {
    try {
        const users = await readData();
        const matched = users.find(user => user.email === email);
        return matched;
    } catch (error) {
        throw error;
    }
};