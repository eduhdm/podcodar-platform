FROM node:14.15-alpine3.11

RUN mkdir app
WORKDIR /app

COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY .sequelizerc .sequelizerc

RUN yarn install
RUN mkdir src

COPY ./src ./src

RUN yarn build

EXPOSE 3000

CMD ["node", "bin/app.js"]
