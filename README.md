<h2 align="center">
  <img src="https://img.shields.io/badge/web%3F-Yes-00b8d3?style=for-the-badge" alt="Sistema web Yes" />
  <img src="https://img.shields.io/badge/server%3F-yes-00b8d3?style=for-the-badge" alt="Server Yes" />
  <img src="https://img.shields.io/github/license/matheusfelipeog/proffy?color=00b8d3&style=for-the-badge" alt="License" />
</h2>

<h1 align="center">
  <img src="https://i.imgur.com/8V13xVm.png" alt="Alura" width="1000px" />
</h1>


## 📌 Index

- [Sobre o projeto](#-sobre-o-projeto)
- [Screenshots](#-screenshots)
- [Techs](#-techs)
- [Instalação e Start](#-instalação-e-start)
- [License](#-license)


## ❔ Sobre o projeto

Um quiz sobre o jogo Overwatch feito com o framework next.js

O projeto desenvolvido na [Imersão React Alura](https://www.alura.com.br/imersao-react-next-js)


## 📸 Screenshots

<h1 align="center">
  <img src="https://i.imgur.com/YWuvBI2.png" alt="questionPage" width="1000px" />
</h1>

## 🍃 Rotas do Backend

GET - http://localhost:3000/api/db --> Lista perguntas do quiz <br>
GET - http://localhost:3000/api/leaderboards --> Lista todos os resultados<br>
POST - http://localhost:3000/api/leaderboards --> Cadastra resultado<br>

## 🛠 Techs

This project was developed using the following technologies:

- [Next.js](https://nextjs.org/)
- [React](https://pt-br.reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)

## ⚙ Instalação e Start
```bash
# Clone this repository
$ git clone https://github.com/Olliveer/aluraquiz.git

# Mongodb
$ Renomeie o arquivo .env.local.example para .env.local e connfigure o seu uri do mongodb e o nome do bd
$ em deploy não esquece de cadastrar as Environment Variables em seu projeto que são as mesmas do .env.local

# Install dependencies
$ yarn install

# Start server
$ yarn dev

# running on port 3000
```

## 📜 License

O projeto está sobre a licença [MIT](./LICENSE) 