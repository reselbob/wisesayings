#!/usr/bin/env bash

docker build .

docker images

docker tag [image_id] reselbob/wisesayings:v0.1

docker push reselbob/wisesayings:v0.1