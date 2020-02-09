<h3 align="center">GoBarber</h3>

<p align="center"> Projeto desenvolvido no bootcamp GoStack da <a href="https://github.com/RocketSeat">Rocketseat</a>
    <br> 
</p>

## 📝 Índice

- [Sobre](#about)
- [Primeiros passos](#getting_started)
- [Feito com](#built_using)

## 🧐 Sobre <a name = "about"></a>

App de agendamento de serviços.

## 🏁 Primeiros passos <a name = "getting_started"></a>

Estas instruçōes te darão uma cópia funcional do projeto na sua máquina local para desenvolvimento e testes.
### Pré-requisitos

Instalar as dependências

```sh
yarn install
```

### Instalação

Configurar as váriaveis de ambiente conforme o .env.example:

```
APP_URL=http://localhost:3333
NODE_ENV=development

# Auth

APP_SECRET= // <-- jwt secret

# Database

DB_HOST= // <-- sequelize db host
DB_USER= // <-- sequelize db user
DB_PASS= // <-- sequelize db pass
DB_NAME= // <-- sequelize db name

# Mongo

MONGO_URL= // <-- mongodb connection string

# Redis

REDIS_HOST=localhost
REDIS_PORT=6379

# Mail

MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=

# Sentry

SENTRY_DSN=

```

Rodando a aplicação:

```js
yarn dev
```

## ⛏️ Feito com <a name = "built_using"></a>

- [PostgresSQL](https://www.postgresql.org/) - Database
- [MongoDB](https://www.mongodb.com/) - Database
- [Sequelize](https://sequelize.org/) - ORM
- [Mongoose](https://mongoosejs.com/) - ODM
- [Express](https://expressjs.com/) - Server Framework
- [NodeJS](https://nodejs.org/en/) - Server Environment
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
