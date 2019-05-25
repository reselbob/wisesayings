# wisesayings
An API to emit a wise saying from a internal list
of Wise Sayings.

The appl runs by default on port `3000`.

The set the app to listen to a custom port, set the environment variable, 
`SAYINGS_PORT`. For example:

`export SAYINGS_PORT=3033`

To install, execute:

`npm install`

To run, execute:

`node index.js`

The application can also be containerized using the Dockerfile found
[here](Dockerfile).