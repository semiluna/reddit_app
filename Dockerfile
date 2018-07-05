FROM node:8.11.3
MAINTAINER Antonia Boca <antonia.boca@appscend.com>

RUN apt-get update
RUN apt-get upgrade -y

RUN mkdir -p /reddit_app
WORKDIR /reddit_app

COPY package.json /reddit_app
COPY package-lock.json /reddit_app
RUN npm install
COPY . /reddit_app
CMD node index.js
EXPOSE 3000

 


