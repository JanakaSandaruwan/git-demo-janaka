# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Serve the build with a lightweight HTTP server
FROM node:14-alpine
WORKDIR /app
COPY --from=0 /app/build ./build
RUN npm install -g serve

# Set the command to run the server
CMD ["serve", "-s", "build"]
EXPOSE 3000
