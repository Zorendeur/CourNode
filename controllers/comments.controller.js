const commentModel = require('../models/comments.model');

// GET /api/comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await commentModel.getAll();
    res.status(200).json(comments);
  } catch (error) {
    console.error('Erreur getAllComments :', error.message);
    res.status(500).json({ message: 'Erreur serveur lors de la récupération des commentaires.' });
  }
};

// GET /api/comments/:id
exports.getCommentById = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await commentModel.getById(id);
    if (!comment) {
      return res.status(404).json({ message: 'Commentaire introuvable.' });
    }
    res.status(200).json(comment);
  } catch (error) {
    console.error('Erreur getCommentById :', error.message);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};

// GET /api/articles/:articleId/comments
exports.getCommentsByArticle = async (req, res) => {
  const { articleId } = req.params;
  try {
    const comments = await commentModel.getByArticleId(articleId);
    res.status(200).json(comments);
  } catch (error) {
    console.error('Erreur getCommentsByArticle :', error.message);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};

// POST /api/comments
exports.createComment = async (req, res) => {
  const { contenu, article_id, auteur } = req.body;

  if (!contenu || !article_id) {
    return res.status(400).json({ message: 'Le contenu et l’ID de l’article sont obligatoires.' });
  }

  try {
    const created = await commentModel.create({ contenu, article_id, auteur });
    res.status(201).json(created);
  } catch (error) {
    console.error('Erreur createComment :', error.message);
    res.status(500).json({ message: 'Erreur serveur lors de la création du commentaire.' });
  }
};

// PUT /api/comments/:id
exports.updateComment = async (req, res) => {
  const { id } = req.params;
  const { contenu, auteur } = req.body;

  if (!contenu && !auteur) {
    return res.status(400).json({ message: 'Au moins un champ (contenu ou auteur) est requis.' });
  }

  try {
    const updated = await commentModel.update(id, { contenu, auteur });
    res.status(200).json(updated);
  } catch (error) {
    console.error('Erreur updateComment :', error.message);
    res.status(500).json({ message: 'Erreur serveur lors de la mise à jour du commentaire.' });
  }
};

// DELETE /api/comments/:id
exports.deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    await commentModel.delete(id);
    res.status(204).send(); // No Content
  } catch (error) {
    console.error('Erreur deleteComment :', error.message);
    res.status(500).json({ message: 'Erreur serveur lors de la suppression du commentaire.' });
  }
};
