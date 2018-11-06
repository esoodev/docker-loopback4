FROM mhart/alpine-node:11

# Create app directory
WORKDIR /app

# If you have native dependencies, you'll need extra tools
RUN apk add --no-cache --virtual .gyp make gcc g++ python

# If you are building your code for production
# RUN npm install --only=production
RUN npm install -g nodemon

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./app/package*.json ./
RUN yarn install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]