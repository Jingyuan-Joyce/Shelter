# VancouverShelters

file structure of application:

controllers: contains all the functions of the application (i.e. all the app.get or app.post functions) - placing it in a separate file makes the application easier to read

public: all the static pages and javascript files can go in the public file

views: contains the layout.ejs file
    - layout.ejs combines the nav-bar, the page we are directing to, and the footer all into one page
    - pages: contains all the ejs pages we will be navigating to
        - ejs is a way for the backend to talk to the front end
    - partials: contains the navbar and the footer

index.js is the origin of our application


instructions to start application on local machine
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