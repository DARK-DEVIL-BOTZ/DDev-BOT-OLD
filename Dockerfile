FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

RUN npm update

COPY package.json .

RUN npm install

COPY . .


CMD ["node", "."]

CMD ["node", "."]
