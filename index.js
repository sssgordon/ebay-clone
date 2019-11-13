const express = require("express");
const app = express();
const productRouter = require("./product/router");

app.use(productRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port :${port}!`));
