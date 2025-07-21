const noteModel = require("../models/notes.model"); // Importe le modèle de notes
/**
 * Gère la requête GET /api/notes
 * Récupère toutes les notes.
 */
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await noteModel.getAllNotes(); // Appelle le modèle pour récupérer les notes.
    res.status(200).json(notes); // Répond avec un statut 200 (OK) et les données JSON.
  } catch (error) {
    console.error("Erreur getAllNotes:", error.message); // Log l'erreur pour le débogage serveur.
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la récupération des notes." }); // Répond avec un statut 500 (Internal Server Error).
  }
};
/**
 * Gère la requête GET /api/notes/:id
 * Récupère une note spécifique par son ID.
 */
exports.getNoteById = async (req, res) => {
  try {
    const note = await noteModel.getNoteById(req.params.id); // Récupère l'ID de l'URL et appelle le modèle.
    if (note) {
      res.status(200).json(note); // Si la note existe, statut 200 et la note.
    } else {
      res.status(404).json({ message: "Note non trouvée." }); // Si la note n'existe pas, statut 404.
    }
  } catch (error) {
    console.error("Erreur getNoteById:", error.message);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la récupération de la note." });
  }
};
/**
 * Gère la requête POST /api/notes
 * Crée une nouvelle note.
 */
exports.createNote = async (req, res) => {
  const { titre, contenu } = req.body; // Extrait le titre et le contenu du corps de la requête.
  // Validation des données d'entrée.
  if (!titre || !contenu) {
    return res.status(400).json({ message: "Titre et contenu sont requis." }); // Statut 400 (Bad Request) si données manquantes.
  }
  try {
    const newNote = await noteModel.createNote({ titre, contenu }); // Appelle le modèle pour créer la note.
    res.status(201).json(newNote); // Statut 201 (Created) et renvoie la note créée.
  } catch (error) {
    console.error("Erreur createNote:", error.message);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la création de la note." });
  }
};
/**
 * Gère la requête PUT /api/notes/:id
 * Met à jour une note existante.
 */
exports.updateNote = async (req, res) => {
  const { titre, contenu } = req.body;
  // Validation : au moins un champ (titre ou contenu) doit être fourni pour la mise à jour.
  if (!titre && !contenu) {
    return res
      .status(400)
      .json({
        message:
          "Au moins un champ (titre ou contenu) est requis pour la mise à jour.",
      });
  }
  try {
    const updatedNote = await noteModel.updateNote(req.params.id, {
      titre,
      contenu,
    }); // Appelle le modèle pour la mise à jour.
    if (updatedNote) {
      res.status(200).json(updatedNote); // Statut 200 (OK) et renvoie la note mise à jour.
    } else {
      res
        .status(404)
        .json({ message: "Note non trouvée pour la mise à jour." }); // Statut 404 si la note n'existe pas.
    }
  } catch (error) {
    console.error("Erreur updateNote:", error.message);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la mise à jour de la note." });
  }
};
/**
 * Gère la requête DELETE /api/notes/:id
 * Supprime une note.
 */
exports.deleteNote = async (req, res) => {
  try {
    const success = await noteModel.deleteNote(req.params.id); // Appelle le modèle pour la suppression.
    if (success) {
      res.status(204).send(); // Statut 204 (No Content) pour une suppression réussie sans corps de réponse.
    } else {
      res
        .status(404)
        .json({ message: "Note non trouvée pour la suppression." }); // Statut 404 si la note n'existe pas.
    }
  } catch (error) {
    console.error("Erreur deleteNote:", error.message);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la suppression de la note." });
  }
};
