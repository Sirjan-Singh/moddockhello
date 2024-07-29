FROM node:16.18.0
COPY . .
# Create app directory
WORKDIR /
RUN npm install
EXPOSE 8081
ENTRYPOINT [ "npm", "start" ]
