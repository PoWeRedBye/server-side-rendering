import express from "express";
import compression from "compression";
import ssr from "./api/router/index.js";
const app = express();

app.use(compression());
app.use(express.static("public"));

app.use("/firstssr", ssr);

const PORT = process.env.PORT || 3040;
const server = app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});