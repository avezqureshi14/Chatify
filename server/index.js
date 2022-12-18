// sk_test_51M6AduSJVCB993v3gA3C5zHfGtwHMRKfToujVBOPpSQedPRafEj9zsbMi8YTI2p8tMzRIVNv4SsTXtO9dxUfxsFN00DwhQu1hS
// mALBORO: price_1MGGwCSJVCB993v3OXGIB7VG
// TREASUE: price_1MGGxWSJVCB993v3BslrKNYG
// ROYAL: price_1MGGxvSJVCB993v377gqDDZm
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51M6AduSJVCB993v3gA3C5zHfGtwHMRKfToujVBOPpSQedPRafEj9zsbMi8YTI2p8tMzRIVNv4SsTXtO9dxUfxsFN00DwhQu1hS');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));