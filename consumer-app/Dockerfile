FROM reselbob/wisesayings:v0.1

WORKDIR /app
COPY index.js /app
COPY package.json /app
RUN npm install
EXPOSE 3034
CMD  ["node", "index.js"]