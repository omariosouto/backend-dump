# Base Image
FROM node:18

# Create app directory in the container
WORKDIR /app

# Bundle app source inside the Docker image (From the current directory to the WORKDIR in the container)
COPY . /app

# Install app dependencies (The correct one is to use npm ci, but it is not working in this case as we are in a mono-repo)
RUN npm install

EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
ENTRYPOINT [ "npm", "start" ]