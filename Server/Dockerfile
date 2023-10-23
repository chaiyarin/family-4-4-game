# Use the official Node.js 20.6.1 image as the base image
FROM node:20.6.1

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install the application dependencies
RUN npm install

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD ["node", "server.js"]
