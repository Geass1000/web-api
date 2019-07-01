FROM node:alpine

WORKDIR /app

COPY . /app

# docker build --tag=web-api:latest .