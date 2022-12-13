const express = require('express');
const request = require("request");

require("dotenv").config();

const port = process.env.PORT || 3001;
const token = process.env.TOKEN || '???';
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
});


app.get("/", (req, res) => {
  const range = req.query["date"];
  const url = `https://api.privatbank.ua/p24api/exchange_rates?json&date=${range}`;
  request(url).pipe(res);
});

app.listen(port, () =>
  console.log(`StockChart app listening on port ${port}!`)
);
