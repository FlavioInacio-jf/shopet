FROM node:14-alpine3.14 as development

WORKDIR /usr/src/app
COPY package.json package-lock.json ./

RUN npm clean
RUN npm cache clean --force
RUN npm install --only=development

COPY . .

EXPOSE 8081
CMD ["npm", "start"]