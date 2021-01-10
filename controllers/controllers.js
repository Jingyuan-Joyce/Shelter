const FileSystem = require("fs");
const https = require("https");
const bodyParser = require("body-parser");

const controller = {

    landing_page: (req, res) => {
        res.render("pages/landing_page");
    }
};

module.exports = controller;