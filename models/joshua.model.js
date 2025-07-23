const prisma = require("../services/prismaClient");

exports.createJoshua = async function (title, price, published) {
  const annonce = await prisma.joshua.create({
    data: {
      title,
      price,
      published,
    },
  });
  return annonce;
};

exports.getAllJoshua = async function () {
  const annonces = await prisma.joshua.findMany();
  return annonces;
};

exports.updateJoshua = async function (id, title, price, published) {
  const updatedAnnonce = await prisma.joshua.update({
    where: { id:id },
    data: {
      title,
      price,
      published,
    },
  });
  return updatedAnnonce;
};

exports.deleteJoshua = async function (id) {
  await prisma.joshua.delete({
    where: { id:id },
  });
};
