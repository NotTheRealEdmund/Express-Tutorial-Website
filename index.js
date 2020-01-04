const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended: true})); 

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});  

app.post('/notes', (req,res) => {
    if (req.body.topic == 1) {
        res.sendFile(path.join(__dirname, 'static', 'first.html'));      
    } else if (req.body.topic == 2) {
        res.sendFile(path.join(__dirname, 'static', 'second.html'));      
    } else if (req.body.topic == 3) {
        res.sendFile(path.join(__dirname, 'static', 'third.html'));      
    } else if (req.body.topic == 4) {
        res.sendFile(path.join(__dirname, 'static', 'fourth.html'));      
    } else if (req.body.topic == 5) {
        res.sendFile(path.join(__dirname, 'static', 'fifth.html'));      
    } else if (req.body.topic == 6) {
        res.sendFile(path.join(__dirname, 'static', 'sixth.html'));      
    } else if (req.body.topic == 7) {
        res.sendFile(path.join(__dirname, 'static', 'seventh.html'));      
    } else if (req.body.topic == 8) {
        res.sendFile(path.join(__dirname, 'static', 'eighth.html'));      
    } else if (req.body.topic == 9) {
        res.sendFile(path.join(__dirname, 'static', 'ninth.html'));      
    } else if (req.body.topic == 10) {
        res.sendFile(path.join(__dirname, 'static', 'tenth.html'));      
    } else {
        res.sendFile(path.join(__dirname, 'static', 'failed.html'));
    }
});

app.listen(3000);
// In VS code cmd type in: "node index"
// In browser type in: "localhost:3000"