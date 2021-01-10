const express = require("express");
const https = require("https");
const layouts = require("express-ejs-layouts");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || "8000";
const controller = require("./controllers/controllers")

const app = express();

// connects the public folder
app.use(express.static(__dirname + "/public"));

// uses the express-ejs-layouts template
app.use(layouts);

// connects the views folder with ejs
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());




// the landing page
app.get("/", controller.landing_page);


// the application page with the map
app.get("/map", controller.map_page);

// the profile page
app.get("/profile", controller.profile_page);

























app.listen(PORT, function() {
    console.log("server is running on local host 8000");
});

/* to start node application: 
type into terminal " npm i" or "npm install" - to download all dependencies

to start the server:
type into terminal "node index.js" or "npm start" or 
"nodemon index.js" (nodemon restarts the server each time you save 
    a file with changes...the other ones require you to stop and restart the server each time to see the changes)

    (if nodemon does not work try typing "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser" into terminal)

to stop server press CTRL + C in the terminal

to see server application:
in a browser type in "localhost::8000" 

 */