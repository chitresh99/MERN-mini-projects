const { Router, response } = require("express");
const usermiddleware = require("../middleware/user");
const { User, Contact } = require("../db")
const router = Router();

router.post('/signup', async function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })
    res.json({
        message: "User created succesfully"
    })
});

// Create Contact Route
router.post('/createcontact', usermiddleware, async function (req, res) {
    const name = req.body.name;
    const contactnumber = req.body.contactnumber;
    const contactemail = req.body.contactemail;

    if (!req.user || !req.user._id) {
        return res.status(403).json({ message: "User is not authenticated" });
    }

    const userId = req.user._id;
    try {
        const newContact = await Contact.create({
            name,
            contactnumber,
            contactemail,
            user: userId
        });

        await User.findByIdAndUpdate(userId, { $push: { contacts: newContact._id } });

        res.status(201).json({
            message: "Contact created successfully",
            contactId: newContact._id
        });
    } catch (err) {
        res.status(500).json({
            message: "Error creating contact",
            error: err.message
        });
    }
});


module.exports = router;