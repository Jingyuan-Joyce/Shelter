const express = require("express");
const https = require("https");


const app = express();

const PORT = process.env.PORT || "8000";

app.listen(PORT, function() {
    console.log("server is running on local host 8000");
});