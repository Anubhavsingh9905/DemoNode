import express from "express";
import sum from "./sum.js";

const app = express();

app.get("/sum/:a/:b", (req, res) => {
    const {a, b} = req.params;
    res.status(200).json(`SUM of ${a} and ${b}  =  ${sum( parseInt(a) , parseInt(b) )}`);
});

app.listen(8080, () => {
    console.log("app is listening on the port 8080");
});