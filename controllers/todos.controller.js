// Récupérer toutes les tâches
exports.getTodos = async (req, res) => {
  try {
    const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/todos`, {
      method: "GET",
      headers: {
        apikey: process.env.SUPABASE_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur Supabase (GET todos):", response.status, errorData);
      throw new Error(`Erreur Supabase: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const todos = await response.json();
    res.status(200).json(todos);
  } catch (error) {
    console.error("Erreur du contrôleur getTodos :", error.message);
    res.status(500).json({ message: "Erreur serveur lors de la récupération des tâches." });
  }
};

// Créer une nouvelle tâche
exports.createTodo = async (req, res) => {
  const { titre, description } = req.body;

  if (!titre) {
    return res.status(400).json({ message: "Le titre est obligatoire." });
  }

  try {
    const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/todos`, {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_KEY,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({ titre, description }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur Supabase (POST todo):", response.status, errorData);
      throw new Error(`Erreur Supabase: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const newTodo = await response.json();
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Erreur du contrôleur createTodo :", error.message);
    res.status(500).json({ message: "Erreur lors de la création de la tâche." });
  }
};

// Supprimer une tâche par son ID
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "L'identifiant de la tâche est requis." });
  }

  try {
    const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/todos?id=eq.${id}`, {
      method: "DELETE",
      headers: {
        apikey: process.env.SUPABASE_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur Supabase (DELETE todo):", response.status, errorData);
      throw new Error(`Erreur Supabase: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    res.status(204).send(); // Pas de contenu à renvoyer
  } catch (error) {
    console.error("Erreur du contrôleur deleteTodo :", error.message);
    res.status(500).json({ message: "Erreur lors de la suppression de la tâche." });
  }
};


// Modifier une tâche existante par son ID
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { titre, description, complete } = req.body;

  if (!id) {
    return res.status(400).json({ message: "L'identifiant de la tâche est requis." });
  }

  if (!titre && description === undefined && complete === undefined) {
    return res.status(400).json({ message: "Au moins un champ à mettre à jour est requis." });
  }

  try {
    const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/todos?id=eq.${id}`, {
      method: "PATCH", // PATCH permet de modifier partiellement
      headers: {
        apikey: process.env.SUPABASE_KEY,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({ titre, description, complete }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur Supabase (PATCH):", response.status, errorData);
      throw new Error(`Erreur Supabase: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const updatedTodo = await response.json();
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error("Erreur du contrôleur updateTodo :", error.message);
    res.status(500).json({ message: "Erreur lors de la mise à jour de la tâche." });
  }
};
