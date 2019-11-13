const express = require("express");
const app = express();
const productRouter = require("./product/router");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./user/router");

const corsMiddleware = cors();
app.use(corsMiddleware);

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(productRouter);
app.use(userRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port :${port}!`));
