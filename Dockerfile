# Use the official Node.js LTS image based on Buster
FROM node:lts-buster

# Create a non-root user for running the application
RUN useradd -m -u 1023 -U -s /bin/bash http

# Set the working directory in the container
WORKDIR /home/http/app

# Install or update npm globally
RUN npm install -g npm@latest

# Install necessary system dependencies
RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

# Copy your application's package.json and lock files
COPY package.json package-lock.json ./

# Install or update dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Remove the outdated ytdl-core module if it exists
RUN npm uninstall ytdl-core

# Install the latest version of ytdl-core
RUN npm install ytdl-core@latest

# Switch to the non-root user for running the application
USER http

# Start your application (replace with your actual start command)
CMD ["node", "."]
