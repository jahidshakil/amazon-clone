const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { request } = require("express");
// const { response } = require("express");
const stripe = require("stripe")("sk_test_51L0YVOSAEdvHt0uITwasdDBnxd2IMbEvcT41oHLNW6fFFsvQG8WRvb7x9vVYT9U5LbgqKAW2IhEKTyeSdrNIdK8Q00L8k6WhHY");

// API



// App config

const app = express();

// -- Middleweares

app.use(cors({origin: true}));
app.use(express.json());

// --API routes
app.get("/", (request, response) => response.status(200).send("hello world"));


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("payment request recieved", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})
//http://localhost:5001/clone-f1832/us-central1/api

// --Listen command
exports.api = functions.https.onRequest(app);
