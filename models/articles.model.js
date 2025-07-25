// const supabase = require("../services/supabaseClient");
const prisma = require("../services/prismaClient");

exports.getAllArticles = async () => {
  const articles = await prisma.articles.findMany({
    where: {
      titre: {
        contains: "e",
        mode: "insensitive",
      },
    },
    orderBy: {
      date_creation: "desc",
    },
    select: {
      id: true,
      titre: true,
      contenu: true,
      date_creation: true,
      commentaires: {
        select: {
          contenu: true,
          auteur: true,
        },
      },
    },
    take: 3,
  });
  console.log(JSON.stringify(articles, (k, v) => (typeof v === "bigint" ? v.toString() : v), 2));
};

// exports.getArticleById = async (id) => {
//   const { data, error } = await supabase.from('articles').select('*').eq('id', id).single();
//   if (error) throw error;
//   return data;
// };

// exports.createArticle = async (article) => {
//   const { data, error } = await supabase.from('articles').insert(article).select().single();
//   if (error) throw error;
//   return data;
// };

// exports.updateArticle = async (id, updates) => {
//   const { data, error } = await supabase.from('articles').update(updates).eq('id', id).select().single();
//   if (error) throw error;
//   return data;
// };

// exports.deleteArticle = async (id) => {
//   const { error } = await supabase.from('articles').delete().eq('id', id);
//   if (error) throw error;
//   return true;
// };

exports.createArticlesAndCommentaires = async ({ titre, contenu, commentaires }) => {
  const article = await prisma.articles.create({
    data: {
      titre,
      contenu,
      commentaires: {
        create: commentaires.map((c) => ({
          contenu: c.contenu,
          auteur: c.auteur,
        })),
      },
    },
    include: {
      commentaires: true,
    },
  });
  console.log(JSON.stringify(article, (k, v) => (typeof v === "bigint" ? v.toString() : v), 2));
};
