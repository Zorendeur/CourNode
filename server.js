const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const notesRoutes = require("./routes/notes.routes");
const todosRoutes = require("./routes/todos.routes");
const articlesRoutes = require("./routes/articles.routes");
const commentsRoutes = require("./routes/comments.routes");
const joshuaRoutes = require("./routes/joshua.routes");

app.use("/api/notes", notesRoutes);
app.use("/api/todos", todosRoutes);
app.use("/api/articles", articlesRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/joshua", joshuaRoutes);

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/comments", (req, res) => {
  res.sendFile(__dirname + "/public/comments.html");
});

app.use((req, res) => res.status(404).send("Route non trouvée."));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Erreur serveur.");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur Express en ligne : http://localhost:${PORT}`);
});
