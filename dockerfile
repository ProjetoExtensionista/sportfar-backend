FROM node:23.11-alpine

WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the NestJS app
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
