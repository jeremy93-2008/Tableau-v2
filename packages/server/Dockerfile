FROM node:20-alpine as server
WORKDIR /server
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run db:generate
EXPOSE 4200
CMD ["npm", "run", "start:docker"]