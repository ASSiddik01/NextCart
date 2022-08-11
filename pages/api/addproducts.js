// Next.js API route support: req.body[i].title,

import connectDb from "../../middleware/mongoose"
import Product from "../../models/Product"

const handler = async (req, res) => {
    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {
            let p = Product({
                id: req.body[i].id,
                title: req.body[i].title,
                description: req.body[i].description,
                thumbnail: req.body[i].thumbnail,
                category: req.body[i].category,
                brand: req.body[i].brand,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty,
            })
            await p.save()
        }
        res.status(200).json({ success: "success" })
    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler);
