const supabase = require("../services/supabaseClient"); // Importe le client Supabase configuré
/**
 * Récupère toutes les notes depuis Supabase.
 */
exports.getAllNotes = async () => {
  // Utilise le client Supabase pour sélectionner toutes les colonnes de la table 'notes'
  // et les ordonne par date décroissante.
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .order("date", { ascending: false });
  // Si Supabase renvoie une erreur, on la propage pour être gérée dans le contrôleur.
  if (error) throw error;
  return data; // Retourne le tableau de notes.
};
/**
 * Récupère une note spécifique par son ID depuis Supabase.
 */
exports.getNoteById = async (id) => {
  // Sélectionne toutes les colonnes où l'ID correspond à celui fourni,
  // et attend un seul résultat (.single()).
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("id", id)
    .single();
  // Supabase renvoie l'erreur 'PGRST116' si .single() ne trouve aucune ligne.
  // On ne propage cette erreur que si ce n'est pas ce code (indiquant une vraie erreur BDD).
  if (error && error.code !== "PGRST116") throw error;
  return data; // Retourne la note trouvée (sera null si non trouvée).
};
/**
 * Crée une nouvelle note dans Supabase.
 */
exports.createNote = async (noteData) => {
  // Insère les données fournies dans la table 'notes'.
  // .select() est utilisé pour que Supabase renvoie l'objet complet qui vient d'être inséré,
  // y compris l'ID généré par la base de données.
  const { data, error } = await supabase
    .from("notes")
    .insert(noteData)
    .select();
  if (error) throw error;
  return data[0]; // Supabase retourne un tableau d'objets créés, on prend le premier.
};
/**
 * Met à jour une note existante dans Supabase.
 */
exports.updateNote = async (id, noteData) => {
  // Met à jour la ligne où l'ID correspond, avec les nouvelles données.
  // .select() pour obtenir la note mise à jour.
  const { data, error } = await supabase
    .from("notes")
    .update(noteData)
    .eq("id", id)
    .select();
  if (error) throw error;
  return data[0]; // Retourne l'objet mis à jour.
};
/**
 * Supprime une note de Supabase.
 */
exports.deleteNote = async (id) => {
  // Supprime la ligne où l'ID correspond.
  const { error } = await supabase.from("notes").delete().eq("id", id);
  if (error) throw error;
  return true; // Retourne true pour indiquer le succès de la suppression.
};
