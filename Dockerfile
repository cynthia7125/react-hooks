# Build stage
FROM node:13-alpine as build

WORKDIR /usr/src

COPY package*.json ./
RUN npm i --only=production

COPY . .

# Production stage
FROM node:13-alpine

WORKDIR /usr/src

COPY --from=build /usr/src .

EXPOSE 3000

CMD ["npm", "start"]