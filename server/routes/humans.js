const express = require('express');
const router = express.Router();
const { handleGet, handlePost, handleUpdate, handleDelete } = require('../handlers');

const model = 'humans'

router.route('/')
  .get(handleGet.bind(null, model))
  .post(handlePost.bind(null, model));

router.route('/:id')
  .delete(handleDelete.bind(null, model));

module.exports = router;  