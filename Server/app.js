const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
// Middlewares
app.use(express.json()); // Para parsear el cuerpo de las solicitudes en formato JSON

// Rutas
app.get("/", (req, res) => {
    res.send("¡Hola, mundo!");
});

app.use("/api", userRoutes);

module.exports = app;