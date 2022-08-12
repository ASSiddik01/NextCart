// Next.js API route support: req.body[i].title,

import connectDb from "../../middleware/mongoose"
import User from "../../models/User"

const handler = async (req, res) => {
    if (req.method == "POST") {
        let u = await User.findOne({ "email": req.body.email });
        if (u) {
            if (req.body.email == u.email && req.body.password == u.password) {
                res.status(200).json({ success: true, email: u.email, name: u.name })
            } else {
                res.status(200).json({ success: false, error: "Wrong Password" })
            }
        } else {
            res.status(200).json({ success: false, error: "Invalid User" })
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler);
