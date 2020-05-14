# Wise Sayings

This is a small Node.js web server application that emits a wise saying on demand via HTTP

## Set up

**Step 1:** Go to the Katacoda Ubuntu Playground

`https://katacoda.com/courses/ubuntu/playground`

**Step 2:** Clone the code from GitHub

`git clone https://github.com/reselbob/wisesayings.git`

**Step 3:** Navigate to the working directory

`cd wisesayings`

## Running as a standalone Node.JS application

To install the application to run on you local machine

**Step 1:** Navigate to the application directory

`cd ./app`

**Step 2:** Install the application dependenices

`npm install`

**Step 3:** Start the application

`node index.js`

**Step 4:** Get a Wise Saying in a new terminal window.

Open a second terminal window, then type,

`curl localhost:3000`

You'll get output similar to the following:

```javascript
{
    "saying": "Grow angry slowly; there's plenty of time.",
    "date": "2019-10-05T17:42:23.955Z"
}
```

**Step 4:** Exit the application in the first terminal window.

`ctrl + C`


## Running as a Docker Container

**Step 1:** Take a look at Dockerfile

`cat Dockerfile`

**Step 2:** Build the container image

`docker build -t wisesayings:beta .`

**Step 3:** Run the container

`docker run -d -p 3000:3000 wisesayings:beta`

**Step 4:** Confirm the container is running

`docker ps -a`

Copy the container ID, you'll need it later.

**Step 5:** Call the application over HTTP using `curl`.

`curl localhost:3000`

**Step 6:** Kill the container.

`docker kill <CONTAINER_ID>`

**Step 7:** Remove the container.

`docker rm -f <CONTAINER_ID>`

**Step 8:** Remove the container image

Find the container image ID

`docker images`

Then remove  the image

`docker rmi -f <CONTAINER_IMAGE_ID>`

**Step 9:** Confirm the image is gone.

`docker images`

## Running on Kubernetes (Optional)

This repo has an example that allows Wise Saying to be
run as a Kubernetes deployment and service.

The Kubernetes deployment and service are to be found in

`./k8s`