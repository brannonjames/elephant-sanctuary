const express = require('express');
const router = express.Router();
const { handleGet, handlePost, handleUpdate, handleDelete } = require('../handlers');

const model = 'elephants';

router.route('/')
  .get(handleGet.bind(null, model))
  .post(handlePost.bind(null, model));

router.route('/:id')
  .put(handleUpdate.bind(null, model))
  .delete(handleDelete.bind(null, model));

module.exports = router;  

