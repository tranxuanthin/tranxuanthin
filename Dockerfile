# Use the official Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .
RUN npm run build
# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
