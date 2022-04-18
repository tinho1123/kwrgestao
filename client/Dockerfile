FROM node:alpine

LABEL version="0.10" description="node client"

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]