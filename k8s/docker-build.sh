#!/usr/bin/env bash

docker build -t reselbob/wisesayings:v0.1 .

docker run --rm -d -p 3033:3033 reselbob/wisesayings:v0.1

docker build -t reselbob/consumerapp:v0.1 .

docker run --rm -d -p 3034:3034 reselbob/consumerapp:v0.1


#to dockerhub
docker push reselbob/wisesayings:v0.1