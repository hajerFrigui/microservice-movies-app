FROM node:14-alpine 
COPY package.json package-lock.json /app/
WORKDIR /app

RUN npm install
COPY . . 
EXPOSE 4000
CMD [ "npm","start" ]