const { User } = require("../models/user");

/* 
    Improvements  
    1. Password encryption
    2. Better error handling
*/
const authService = {
    login: async (username, password) => {
        try {
            const res = await User.find({ username, password });
            if (res.length > 0) {
                return res[0];
            } else {
                throw new Error("Invalid credentials");
            }
        } catch (error) {
            throw error;
        }
    },
    signup: async (name, username, password) => {
        try {
            const user = new User({
                name,
                username,
                password,
                createdAt: new Date().getTime(),
            });
            return await user.save();
        } catch (error) {
            throw error;
        }
    },
};

module.exports = authService;
