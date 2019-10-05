# Wise Sayings

This is a small Node.js web server application that emits a wise saying on
demand via HTTP

Also, this repo has an example that allows Wise Saying to be
run as a Kubernetes deployment and service.

The Kubernetes deployment and service are to be found in

`./k8s`

## Installation

To install the application to run on you local machine

`cd ./app`

`npm install`

To get it running type:

`node index.js`

Then to get a Wise Saying,

`curl locahost:3000`

You'll get output similar to the following:

```javascript
{
    "saying": "Grow angry slowly; there's plenty of time.",
    "date": "2019-10-05T17:42:23.955Z"
}
```

## Running the application's tests

Make sure you're in the application's source code directory, `./app`.

Then run:

`npm test`