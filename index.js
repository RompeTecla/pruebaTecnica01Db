const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT, () => {
    console.log ("Servidor levantado en el puerto " + PORT)
}) 

//Endpoint de prueba
app.get('/probando', (req, res) => {
    return res.send('Probando 1, 2, 3... ¡EUREKA!');
});

