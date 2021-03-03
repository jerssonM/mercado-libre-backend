const express = require('express');

const {
  itemSerializer,
  itemsListSerializer
} = require('../../serializers/items');
const ItemsRepository = require('../../repositories/items');

const router = express.Router();

router.get('/', async (req, res) => {
  const { q } = req.query;
  const data = await new ItemsRepository().getAll(q);
  if (data.error) {
    res.status(500).json(data);
  }
  res.status(202).json(itemsListSerializer(data));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await new ItemsRepository().getById(id);
  if (data.error) {
    res.status(500).json(data);
  }
  res.status(202).json(itemSerializer(data));
});

module.exports = router;
