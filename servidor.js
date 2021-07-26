const express = require('express');
const server = express();

const port = 3000;

//motor de plantilla
server.set('view engine', 'ejs');
//direccion de plantillas
server.set('views', __dirname + '/views');

server.use(express.static(__dirname + "/public"));

server.get('/', (req, res) => {
    res.render("index");
});

server.use((req, res, next) => {
    res.status(404).render("404", {titulo: "Error 404"})
})

server.listen(port, () => {
    console.log('Servidor Festival_Musical...', port);
});