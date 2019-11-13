const express = require("express");
const app = express();
const productRouter = require("./product/router");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./user/model");

const corsMiddleware = cors();
app.use(corsMiddleware);

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(productRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port :${port}!`));
