FROM node:14-alpine3.14 as development

WORKDIR /usr/src/app
COPY package.json package-lock.json ./

RUN npm cache clean --force
RUN npm install --only=development
RUN npm install nodemon -g --save

COPY . .

EXPOSE 8081
CMD ["npm", "start"]