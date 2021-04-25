![HelpChat](.github/logo.svg)

## :mag_right: About
Project developed during :rocket: **Next Level Week #5**, Node.js track, from Rocketseat.
It contains a chat window which uses websockets for realtime communication and sqlite for data persistance.

## :computer: Getting Started

1. Clone this repository
```bash
  git clone https://github.com/vhfarias/nlw-helpchat.git
```
2. Install dependencies
```bash
  npm install --save
```
3. Run project server
```bash
  npm run dev
```
4. This project is comprised of a client and a administrator side. both ends can be accessed in your favorite browser at [localhost:3333/pages/client](localhost:3333/pages/client) and [localhost:3333/pages/admin](localhost:3333/pages/admin), respectively.

5. There are some endpoints reached by POST and PUT. Use Insomnia to reach them.


Method |Path           |JSON                             |Action
------ |----           |----                             |------        
POST   |/users         |email: _string_                  |create a new user
POST   |/settings      |chat: _boolean_ username:"admin" |configure a admin in a fresh database
PUT    |/settings/admin|chat: _boolean_|show/hide "Suporte" button (enables/disables the chat in a real integrated application) 


## :wrench: Setting up
- [VSCode](https://code.visualstudio.com/)
- [Insomnia](https://insomnia.rest/)

#### Extensions
- [SQLite by alexcvzz](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)

## :bar_chart: Front-end technologies
- HTML
- CSS
- Javascript

## :books: Back-end technologies
- [Node.js](https://nodejs.org/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Mustache](https://github.com/janl/mustache.js)
- [socket.io (and socket.io-client)](https://socket.io/)
- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [typeorm](https://typeorm.io/#/)

## :memo: License
Feel free to use it as you wish, as long it causes no harm to anyone.
## :+1: Thanks
Thanks to Rocketseat for providing free and quality content and to participant [Rodrigo Moraes](https://www.youtube.com/channel/UCSUOHGccFn60P3CGl4xrRaQ) for providing a [bugfix](https://www.youtube.com/watch?v=AijpqBpdxC8) for an error that was left after the final steps of the journey.