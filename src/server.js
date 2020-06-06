// chamando o express
const express = require("express");
const server = express();

//configurar pasta public
server.use(express.static("public"));

//utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// configurar caminhos da minha aplicação
// página inicial
// req: requisição
// res: resposta
server.get("/", (req, res) => {
  return res.render("index.html", { title: "Ecoleta" });
});

server.get("/create-point", (req, res) => {
  // req.query: Query Strings da nossa url
  // console.log(req.query)

  return res.render("create-point.html");
});

server.get("/search-results", (req, res) => {
  const search = req.query.search;
  return res.render("search-results.html", { total: 0 });
});

//ligar o servidor
server.listen(3000);
