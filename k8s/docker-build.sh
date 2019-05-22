#!/usr/bin/env bash

docker build -t reselbob/wisesayings:v0.1 .

docker run --rm -d -p 3033:3033 reselbob/wisesayings:v0.1


#to dockerhub
docker push reselbob/wisesayings:v0.1