FROM node:16

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .
 
EXPOSE 9898

CMD [ "npm", "run", "start" ]