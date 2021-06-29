const responses = require("./response.json");
const _ = require("lodash");
const path = require("path");

const express = require("express");
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);


// app.use(express.static(__dirname));

let logEntry = null;

// Endpoints
app.get("/", (req, res) => {
    res.send("Neural server is running.");
})

app.get("/monitor", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.get("/ping", (req, res) => {
    // Here, lodash random() is used to simulate the probability of different responses
    let outcome = _.random(1, 100);
    let delay = _.random(1000, 2000);

    if(outcome <= 5)        responsesIndex = 0;
    else if(outcome <= 85)  responsesIndex = 1;
    else if(outcome <= 95)  responsesIndex = 2;
    else                    responsesIndex = 3;

    setTimeout(() => {
        logEntry = responses[responsesIndex];
        io.emit("LogEntry", logEntry);
        res.json(logEntry);
    }, delay);
});

const server = http.listen(3000, () => {
    console.log("Server is listening on port : " + server.address().port);
});