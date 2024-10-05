// include the moudle
const express = require('express');
const path = require('path');

//instantiate  the  express lib
const app = express();

//server port
const HTTP_PORT = 3000;

app.use(express.static('public'));


//GET route Index
app.get('/', (req, res) => {
    console.log("GET Route INDEX");
    
    // absolute path to the HTML file
    var filePath = path.join(__dirname, './views/index.html');

    // error check
    console.log(filePath);

    //send the file
    res.sendFile(filePath);
})

//GET route Index
app.get('/add-artist', (req, res) => {
    console.log("GET Route Add_Artist");
    
    // absolute path to the HTML filedd
    var filePath = path.join(__dirname, './views/add-artist.html');

    // error check
    console.log(filePath);

    //send the file
    res.sendFile(filePath);
})


//listen for connections
app.listen(HTTP_PORT, () => {
    console.log(`Server is listening on port ${HTTP_PORT}`);
})




