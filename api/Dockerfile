FROM node:22.12.0

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

RUN npx prisma generate --schema=./prisma/postgres/schema.prisma

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3055

# Run the app
CMD npm run postgres:migrate:dev && npm run start:dev