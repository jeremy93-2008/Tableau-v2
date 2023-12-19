FROM node:20-alpine as client
WORKDIR /client
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]