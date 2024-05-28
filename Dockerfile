FROM node:lts-alpine AS build

ARG API_URL
ENV VITE_API_URL=${API_URL}

COPY . .

RUN npm install --ignore-scripts

RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine-slim

LABEL version="0.1"
LABEL description="Front de api billeterie jeu Olympique"

COPY --from=build dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
