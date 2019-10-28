#Imagem
FROM node:12.2.0

#Cria o diretório APP
RUN mkdir -p /app

# define o diretório utilizado
WORKDIR /app

# Instalar o Chrome para testes
# -q desliga o 'output'(geralmente relacionado a
# saídas de console que geram logs do -wget
# -O é utilizado para causar um redirecionamento.
RUN wget -q -O - http://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable



# adiciona `/app/node_modules/.bin` ao $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Instalar e 'cachear' as depêndencias do app
COPY Front-End/package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@8.3.5 --unsafe

# Adicionar o aplicativo
COPY Front-End/. /app

# Iniciar Aplicativo
CMD ng serve --host 0.0.0.0