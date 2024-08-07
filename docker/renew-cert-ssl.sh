#!/bin/bash

docker compose -f ~/docker/docker-compose.tools.yml up -d
sleep 1m
docker compose exec nginx nginx -s reload
