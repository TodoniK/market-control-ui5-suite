const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const connection = mysql.createConnection({
  host: "127.0.0.1", // adresse de votre serveur MySQL
  user: "jroyet", // nom d'utilisateur de votre serveur MySQL
  password: "Magalie2507_", // mot de passe de votre serveur MySQL
  database: "openui" // nom de votre base de données MySQL
});

// Définissez votre point de terminaison ici
app.get("/api/orders", (req, res) => {
  const query = "SELECT * FROM orders"; // remplacer "table" par le nom de votre table MySQL
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur serveur");
    } else {
      res.json(results);
    }
  });
});

// Définissez votre point de terminaison ici
app.get("/api/products", (req, res) => {
  const query = "SELECT * FROM products"; // remplacer "table" par le nom de votre table MySQL
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur serveur");
    } else {
      res.json(results);
    }
  });
});

// Définissez votre point de terminaison ici
app.get("/api/users", (req, res) => {
  const query = "SELECT * FROM users"; // remplacer "table" par le nom de votre table MySQL
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur serveur");
    } else {
      res.json(results);
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur API démarré sur le port ${port}`);
});
