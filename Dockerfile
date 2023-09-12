FROM node:lts-buster

RUN deluser --remove-home node \
  && groupadd --gid 1023 http \
  && useradd --uid 1023 --gid http --shell /bin/bash --create-home http \
  && mkdir -p /home/http/app \
  && chown -R http:http /root \
  && chown -R http:http /usr/local \
  && chown -R http:http /home \
  && npm install -g npm@10.1.0

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm uninstall ytdl-core

RUN npm install ytdl-core@4.11.5

COPY . .

CMD ["node", "."]

CMD ["node", "."]


