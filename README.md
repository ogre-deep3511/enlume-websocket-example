# EventStan Assignment (Backend)

```text
* Approach(Server)
    - For server, It uses express framwork, lodash package just to randomize it's random().
    - It has two endpoints "http://localhost:port/ping" to get the response and "http://localhost:port/monitor" to get log details.
    - Additionally, it has root endpoint which will tell that server is up.
    - It uses setTimeout() to delay it 1-2 seconds to send response.
    - It uses socket.io to monitor realtime logging.
    - Also, used http server to connect with socket.io
```

```text
* Approach(Simulator)
    - It uses lodash for randomize time interval.
    - It uses setInterval() for sending request at every radomly generated time.
```

```text
* Appraoch(Front-end)
    - It uses Bootstrap and jquery.
```

```text
* Installation
    - Firstly, run "npm install" for server to install all the dependencies from package.json
    - Then run "npm run start".
    - It will be running on port 3000
    - Now, as the server is running and ready to take request.
    - Install all the dependencies for simulator.
    - Run "npm install" from simulator directory.
    - Now, run "npm run start".
    - It will be sending request.
    - Now, you can monitor all the logs with the endpoint "http://localhost:3000/monitor".
    - You can also filter by log type by check/uncheck from frontend dashboard.
```
