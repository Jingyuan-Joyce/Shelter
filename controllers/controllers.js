const FileSystem = require("fs");
const https = require("https");
const bodyParser = require("body-parser");

const controller = {

    landing_page: (req, res) => {
        res.render("pages/landing_page");
    },
    
    map_page: (req, res) => {
        res.render("pages/map_page");
    },
    
    profile_page: (req, res) => {
        res.render("pages/profile_page");
    }
};

module.exports = controller;