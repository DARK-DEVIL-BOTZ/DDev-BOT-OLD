FROM node:lts-buster

WORKDIR /app

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install

RUN npm install pm2 -g && pm2 install ffmpeg

COPY . .

RUN chmod +x ddev-bot.sh

CMD ["./ddev-bot.sh"]