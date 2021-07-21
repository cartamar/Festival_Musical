const express = require('express');
const server = express();

const port = 3000;

server.set('view engine', 'ejs');

server.use(express.static(__dirname + "/public"));

server.get('/', (req, res) => {
    res.send('Festival Musical');
});

server.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
})

server.listen(port, () => {
    console.log('Servidor Festival_Musical...', port);
});