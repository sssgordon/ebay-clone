const express = require("express");
const app = express();
const productRouter = require("./product/router");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./user/router");
// const imageRouter = require("./image/router");

const corsMiddleware = cors();
app.use(corsMiddleware);

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(productRouter);
app.use(userRouter);
// app.use(imageRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port :${port}!`));
