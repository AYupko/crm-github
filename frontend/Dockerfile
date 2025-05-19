# 🔧 Build stage
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
COPY frontend/ ./frontend/

WORKDIR /app/frontend

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
