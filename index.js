const express = require("express");
const https = require("https");


const app = express();

const PORT = process.env.PORT || "8000";

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