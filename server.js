require('dotenv').config()
const PORT = process.env.PORT;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cb');
const express = require('express');
const app = express();


// api routes
const routes = require("./routes");
app.use("/transaction", routes.transaction);


app.get("*", (req,res) => {
    res.send('<h1 style="color:#67c8db">Longs CoinBase API</h1>');
})

app.listen(PORT, () => {
  console.log('listening on port ', PORT)
})
