FROM nginx:latest

LABEL maintainer "Bill Brubaker <brubaker.bill+docker@gmail.com"

RUN mkdir ~/app/

WORKDIR ~/app/

COPY . .

#run server.
