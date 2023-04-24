FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm i -f 

COPY . .

ENV URL_DB=${URL_DB}
ENV PORT_NUMBER=${PORT_NUMBER}


EXPOSE ${PORT_NUMBER}

CMD ["sh","-c","npm start"]