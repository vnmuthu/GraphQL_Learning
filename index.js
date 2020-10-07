import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("My first GraphQL!!!");
})

app.get("/GraphQL", (req, res) => {
    res.send("My first GraphQL Test!!!");
})

app.listen(8080, ()=> console.log("Running server on port http://localhost:8080/GraphQL"));