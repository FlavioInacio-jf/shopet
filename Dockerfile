FROM node:14-alpine3.14 as development

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm cache clean --force
RUN npm install
RUN npm install nodemon -g --save

COPY . .

EXPOSE 8081
CMD ["npm", "start"]