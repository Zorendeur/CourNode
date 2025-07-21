const supabase = require('../services/supabaseClient');

// Récupérer tous les commentaires
exports.getAll = async () => {
  const { data, error } = await supabase
    .from('commentaires')
    .select('*')
    .order('date_creation', { ascending: false });

  if (error) throw new Error(error.message);
  return data;
};

// Récupérer un commentaire par ID
exports.getById = async (id) => {
  const { data, error } = await supabase
    .from('commentaires')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

// Récupérer tous les commentaires d’un article donné
exports.getByArticleId = async (articleId) => {
  const { data, error } = await supabase
    .from('commentaires')
    .select('*')
    .eq('article_id', articleId)
    .order('date_creation', { ascending: false });

  if (error) throw new Error(error.message);
  return data;
};

// Créer un nouveau commentaire
exports.create = async ({ contenu, article_id, auteur }) => {
  const { data, error } = await supabase
    .from('commentaires')
    .insert([{ contenu, article_id, auteur }])
    .select()
    .single(); // Pour retourner l'objet inséré

  if (error) throw new Error(error.message);
  return data;
};

// Mettre à jour un commentaire
exports.update = async (id, updateFields) => {
  const { data, error } = await supabase
    .from('commentaires')
    .update(updateFields)
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
};

// Supprimer un commentaire
exports.delete = async (id) => {
  const { error } = await supabase
    .from('commentaires')
    .delete()
    .eq('id', id);

  if (error) throw new Error(error.message);
};
