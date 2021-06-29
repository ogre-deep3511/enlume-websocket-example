const http = require("http");
const _ = require("lodash");

const options = {
    hostname: "localhost",
    port: "3000",
    path: "/ping",
    method: "get"
};
const MAX_TIMEOUT = 5000;
const USER_COUNT = 10;

// Initial user setup
let users = [];
for(userNo = 0; userNo < USER_COUNT; userNo++) {
    users.push({
        "userName": `user_${userNo + 1}`,
        "currentDelay": _.random(1, MAX_TIMEOUT)
    });
}

// Simulates user interaction
for (const user of users) {
    setInterval(function() {
        const req = http.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`);
        
            res.on('data', d => {
                console.log("User " + user.userName + ":");
                console.log(JSON.parse(d));
            });
        })
        
        req.on('error', error => {
            console.error(error)
        });
          
        req.end();
    }, _.random(1, MAX_TIMEOUT));
}