const express = require('express');
const cors = require('cors');
const spacesRouter = require('./routes/index');

const app = express();
const port = 3000;

app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Rutas
app.use('/api', spacesRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

