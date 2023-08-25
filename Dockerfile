FROM node:18

# Working Dir
WORKDIR /BITROOT-BACKEND

# Copy Package Json Files
COPY package*.json ./

# Install Files
RUN npm install

# Copy Source Files
COPY . .

# Build
RUN npm run build

# Expose the API Port
EXPOSE 1337

CMD ["node", "index.js"]