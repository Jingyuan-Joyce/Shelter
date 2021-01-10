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
    },

    shelter_login: (req, res) => {
        res.render("pages/shelter_login");
    }
};

module.exports = controller;