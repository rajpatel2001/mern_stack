# FROM node:alpine

# WORKDIR /app

# COPY package*.json .

# RUN npm install -f 

# COPY . .


# EXPOSE 3000

# CMD ["sh","-c","npm start"]


FROM node as builder

WORKDIR /app/client

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html /etc/nginx/conf.d/default.conf

COPY --from=builder ./app/client/build /usr/share/nginx/html

COPY --from=builder ./app/client/nginx/default.conf /etc/nginx/conf.d/default.conf

# CMD ["npm", "start"]

CMD ["nginx", "-g", "daemon off;"]