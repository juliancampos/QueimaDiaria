
## Teste QueimaDiaria ##
Software desenvolvido para o processo seletivo

## Informações ##

### Principais recursos utilizados: ###
* NodeJS
* Framework Express
* Banco de Dados MongoDB
* Swagger
* yaml
* Mongoose
* bcrypt
* jwt
* docker

### Estrutura ###
O projeto foi estruturado para que seja possível configurar da porta de acesso ao sistema,
link de conexão com o banco de dados e url para a busca dos dados no banco MongoDb sem que
sejam realizadas grandes alterações no projeto, para isso, deve ser alterado o arquivo
'default.yml' que se encontra na pasta 'config'.

Desenvolvida configuração com a ferramenta Swagger para que sirva de auxilio, teste e documentação
do software, sendo possível realizar chamadas às rotas da Api. Sua configuração se da através do 
arquivo 'swagger.json' que se encontra na raiz do projeto.

As rotas da api foram modularizadas para que possam ser criadas novas rotas/modulos em pastas 
separadas, estas se encontram na pasta './api/routes'
Cada módulo contém seus controllers, services e routes.

#### Detalhes ####
* Foi utilizado o banco de dados MongoDB na plataforma MLAB e Mongoose para realizar as acoes no banco
* Para proteçao das rotas, foi utilizada a biblioteca jwt. 
  Sempre que o usuario realizar o login no sistema, sera gerado um token para que o mesmo consiga
  utilizar o software.
  As permissoes sao de acordo com o tipo do usuario(admin ou common)
* Para facilitar alteraçoes como url de banco de dados, token key (utilizado na criacao do token do usuario),
  configuracao de porta de acesso a sistema, foi utilizada a biblioteca js-yaml. Com esta biblioteca,
  estas configuracoes sao realizadas no arquivo conf/default.yml
* Para manter a senha do usuario em sigilo, foi utilizada a biblioteca bcrypt para que a senha seja
  criptografada ao ser criada e registrada no banco de dados.
* Para facilitar a instalacao, foi disponibilizado o acesso ao software atraves do Docker, que consiste em 
  criar e executar um ambiente para a execucao do software.

#### Execução ####

docker build -t julian/queima-diaria .
docker run -p 3002:3002 -d julian/queima-diaria

Para execução do software devem ser instalados NodeJS.
Após realizar o download do software, deve ser executado o comando:

* node server.js

#### Acesso ao Swagger ####
* localhost:3002/swagger

#### Login ####
* localhost:3002/api/user/signIn

#### Get Users ####
* localhost:3002/api/users

#### Get Movies ####
* localhost:3002/api/movie