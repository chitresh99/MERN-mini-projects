const { User } = require("../db/index");

async function usermiddleware(req, res, next) {
    const username = req.headers.username; 
    const password = req.headers.password;

    try {
        const user = await User.findOne({ username, password });
        if (user) {
            req.user = user; 
            next();
        } else {
            res.status(403).json({ msg: "User doesn't exist or password is incorrect" });
        }
    } catch (err) {
        res.status(500).json({ msg: "Error in authentication", error: err.message });
    }
}

module.exports = usermiddleware;
