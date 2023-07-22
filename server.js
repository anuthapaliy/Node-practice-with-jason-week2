const { count } = require("console");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hello CYF");
    response.send(count = count + 1)

})

app.listen(3000)
