const { create, find, findByIdAndUpdate, findByIdAndRemove } = require('../database');

// In this app's case, model will equal either humans or elephants
// the value of model is bound at the route

exports.handleGet = async (model, req, res, next) => {
  try {

    const data = await find(model);
    res.send(data.rows);

  } catch (err) {

    next(err);

  }
}

exports.handlePost = async (model, req, res, next) => {
  try {

    await create(model, req.body);
    res.sendStatus(200);

  } catch (err) {
    
    next(err);

  }
}

exports.handleUpdate = async (model, req, res, next) => {
  try {

    await findByIdAndUpdate(model, req.params.id, req.body);
    res.sendStatus(200);

  } catch (err) {

    next(err);
    
  }
}

exports.handleDelete = async (model, req, res, next) => {
  try {

    await findByIdAndRemove(model, req.params.id);
    res.sendStatus(200);

  } catch (err) {

    next(err);
    
  }
}