const express = require('express');
const app = express();

// Ruta básica para la página principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Puerto en el que escucha la app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});