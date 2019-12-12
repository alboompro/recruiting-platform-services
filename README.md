# Teste para recrutamento Plataforma e Serviços

Projeto referente a um teste de recrutamento na Alboom.

O projeto consiste na criação de um software que ficará hospedado em um totem de autoatendimento. Seu propósito é oferecer café e cupom de desconto para os clientes durante a Feira Nacional dos Fotógrafos Amantes de Café (FENAFAC).

Seu funcionamento é simples, o cliente informa seu nome e e-mail, escolhe dois tipos de café e alguns ingredientes presentes no cardápio e, no final é impresso o cupom de desconto. O cliente pode realizar o processo apenas uma vez.

### Instalação e configuração

##### Pré requisitos
- Ruby 2.5.7p206
- Rails 6.0.1
- NPM 6.12.0
- React 16.12.0
- MySQL 8.0

##### Back-end
- Faça o clone do repositório na sua máquina local;
- Prepare o banco de dados executando os scripts presentes no arquivo **database.sql** (MySQL);
- Abra a pasta **backend** e digite no terminal o comando **bundle install** para que as dependências do projeto sejam instaladas;
- No arquivo **/backend/config/database.yml**, configure com as informações de seu banco de dados;
- Coloque a API online digitando no terminal o comando **rails s**;
- Verifique o **IP e porta** que a API está sendo executada, pois essas informações serão usadas no projeto Frontend;

##### Front-end
- Entre na pasta **frontend** e instale as dependências digitando no terminal o comando **npm install**;
- Entre no arquivo **/frontend/src/utils/base-axios.js** e configure o parametro **baseURL** com o **IP e porta** da API rails configurado anteriormente;
- Rode o site com o comando **npm start** em seu terminal;

### Demo
- https://app-smart-coffee.herokuapp.com/