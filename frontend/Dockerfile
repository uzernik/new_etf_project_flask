# Use Node.js official image as base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the development server
CMD ["npm", "start"]
