const { createUser } = require("./login.services");
const loginUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const newUser = await createUser({ email, password, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    loginUser,
};