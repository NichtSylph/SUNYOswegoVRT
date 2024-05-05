# Stage 1: Build the React app
FROM node:14 AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all Node.js dependencies
RUN npm install

# Copy the rest of app's source code from your host to your image filesystem.
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the app using a smaller base image
FROM node:14-alpine
WORKDIR /app

# Copy the build directory from the build stage to the /app directory
COPY --from=build /app/build ./build

# Install serve to serve the app on port 26885
RUN npm install -g serve

# Expose port 26885 to the outside once the container is running.
EXPOSE 26885

# Run the serve command to serve the static files
CMD ["serve", "-s", "build", "-l", "26885"]
