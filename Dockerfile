FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /Users/rafaellaballerini/documents/Pós Tech/Fase 1/Tech Challenge/api-lanchonete
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run dev" ]
