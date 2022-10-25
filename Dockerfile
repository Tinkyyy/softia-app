FROM node:lts-slim

WORKDIR /app

COPY . .

ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

RUN npm install
RUN npm install -g ts-node nodemon

EXPOSE 8080

CMD ["sh", "-c", "/wait;npm run full;npm run dev""]