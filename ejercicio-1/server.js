const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'parcial_db'
});

client.connect();

app.get('/', (req, res) => {
  res.json({
    nombre: "Alexis Eduardo Arevalo Valenzuela",
    expediente: "25727",
    codigo: "av22i04001"
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/db-test', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM estudiantes');
    res.json({ 
      message: 'Conexion a BD exitosa',
      estudiantes: result.rows 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
