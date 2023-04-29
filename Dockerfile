# Use an official Node.js runtime as a parent image
FROM node:14-alpine
FROM node:14-alpine

# Create a new user with UID 10014 and add it to the 'users' group
RUN addgroup -g 10014 myuser && \
    adduser -u 10014 -G myuser -s /bin/sh -D myuser

# Set the working directory to /app and change the owner to the newly created user
WORKDIR /app
RUN chown -R myuser:myuser /app

# Switch to the newly created user
USER 10014

# Copy the application code to the container
COPY . .

# Install the application's dependencies
RUN npm install

# Start the application
CMD ["npm", "start"]

EXPOSE 3000
