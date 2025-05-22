# Build stage
FROM node:18 as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Runtime stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .

EXPOSE 5000
CMD ["node", "index.js"]
