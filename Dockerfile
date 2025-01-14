FROM node:14-alpine3.14 as development

WORKDIR /usr/src/app
COPY package.json yarn.lock ./

RUN npm cache clean --force
RUN yarn install --frozen-lockfile

RUN npm install --only=development

COPY . .

EXPOSE 8081
CMD ["yarn", "start"]