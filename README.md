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

Configurar a conexão com o sequelize em src/config/database.js

```js
module.exports = {
  dialect: 'postgres', // veja https://sequelize.org/v5/manual/dialects.html para mais informações sobre dialects
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
```

Configurar a conexão com o mongoose em src/database/index.js

```js
mongo() {
  this.mongoConnection = mongoose.connect(
    'mongodb://localhost:27017/gobarber', // <-- string de conexão aqui
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    }
  );
}
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
- [JWT](https://jwt.io/)
