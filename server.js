const express = require('express');

const app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', function (req, rsp) {
    rsp.sendFile(__dirname + '/views/welcome.html');
});

app.get('/rating', function (req, rsp) {
    rsp.sendFile(__dirname + '/views/rating.html');
});

app.get('/realtime', function (req, rsp) {
    rsp.sendFile(__dirname + '/views/realtime.html');
});

app.get('/projects', function (req, rsp) {
    rsp.sendFile(__dirname + '/views/projects.html');
});

app.get('/descriptions', function (req, rsp) {
    rsp.sendFile(__dirname + '/views/descriptions.html');
});

app.listen(3000, function () {
    console.log("Server is running on port 3000")
});