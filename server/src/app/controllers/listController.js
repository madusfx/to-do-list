const express = require('express');
const Item = require('../models/list');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/item', auth, async (req, res) => {
  try {
    const item = new Item({
      ...req.body,
      userId: req.userId,
    });
    await item.save();
    res.status(201).send({ item });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

router.get('/items/:userId', auth, async (req, res) => {
  const { userId } = req.params;
  try {
    const items = await Item.find({ userId });
    if (items.length === 0) {
      return res.status(404).send({ error: 'No items found for this user' });
    }
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

router.put('/item/:id', auth, async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findOne({ _id: id, userId: req.userId });
    if (!item) {
      return res.status(404).send({ error: 'Item not found or you do not have permission to update this item' });
    }

    Object.assign(item, req.body);
    await item.save();
    res.send({ item });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

router.delete('/item/:id', auth, async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findOneAndDelete({ _id: id, userId: req.userId });
    if (!item) {
      return res.status(404).send({ error: 'Item not found or you do not have permission to delete this item' });
    }

    res.send({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

module.exports = (app) => app.use('/list', router);