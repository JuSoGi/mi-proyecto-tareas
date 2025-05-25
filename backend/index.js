// backend/index.js

const express = require('express');  // Importa express
const cors = require('cors');        // Importa cors

const app = express();               // Crea la app
const PORT = 3001;                   // Puerto donde se ejecutará el servidor

app.use(cors());                     // Permite conexiones desde otros orígenes (como React)
app.use(express.json());             // Permite recibir datos en formato JSON

// Simulamos una "base de datos" con un arreglo de tareas
let tareas = [
  { id: 1, texto: "Actividad 4" },
  { id: 2, texto: "proyecto React" },
];

// GET: devuelve la lista de tareas
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

// POST: recibe una nueva tarea y la guarda
app.post('/tareas', (req, res) => {
  const { texto } = req.body;

  if (!texto) {
    return res.status(400).json({ error: "Falta el texto de la tarea" });
  }

  const nuevaTarea = {
    id: tareas.length + 1,
    texto,
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
