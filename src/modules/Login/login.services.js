const MLogin = require("./login.schema");

const createUser = async (userData) => {
    return await MLogin.create(userData);
};


module.exports = {
    createUser,
};