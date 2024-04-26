FROM node:lts-alpine AS build

COPY . .

RUN npm install --ignore-scripts

RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine-slim

COPY --from=build dist /usr/share/nginx/html

EXPOSE 8080