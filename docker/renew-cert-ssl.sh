#!/bin/bash

docker compose -f ~/docker/docker-compose.tools.yml up -d
sleep 5m
cd ~/docker
docker compose exec nginx nginx -s reload
