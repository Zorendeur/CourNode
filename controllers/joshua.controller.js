const model = require("../models/joshua.model");

exports.create = async (req, res) => {
  const { title, price, published } = req.body;
  if (!title || !price) return res.status(400).json({ message: "Title and price require." });
  try {
    const joshua = await model.createJoshua(title, price, published);
    res.status(201).json(joshua);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const joshua = await model.getAllJoshua();
    res.status(200).json(joshua);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.update = async (req, res) => {
  const {id, title, price, published } = req.body;
  if (!title && !price) return res.status(400).json({ message: "Titre ou prix requis." });
  try {
    const data = {};
    if (title) data.title = title;
    if (price) data.price = price;
    if (published) data.published = published;
    const joshua = await model.updateJoshua(id, title, price, published);
    res.status(200).json(joshua);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.delete = async (req, res) => {
   const {id} = req.body;
  try {
    await model.deleteJoshua(id);
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
