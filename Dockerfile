# Use a imagem oficial do Node.js como base
FROM node:14

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY ./src/package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte para o diretório de trabalho
COPY ./src ./

# Exponha a porta em que a aplicação estará disponível (por exemplo, 3000)
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
