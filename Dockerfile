# Backend service
FROM node:14-alpine AS backend

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["node", "dist/main"]

# Frontend service
FROM node:14-alpine AS frontend

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200
CMD ["npm", "start"]
