import express from 'express';

const app = express();

/**
* GET => buscas
* POST => criação
* PUT => alteração
* DELETE => exclusão
* PATCH => alterar informação específica
*/

app.get("/", (request, response) => {
  return response.json({
    "message": "Olar NLW05!"
  })
});

app.post("/", (request, response) => {
  return response.json({
    "message": "Usuário salvo com sucesso"
  })
});



app.listen(3333, () => console.log("Server is running on port 3333"));