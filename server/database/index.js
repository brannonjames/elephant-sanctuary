const pool = require('./config');

// kinda taking a stab at a custom ORM, inspired by sequelize and mongoose methods
// totally unnecessary but could probably drop into any future SQL projects pretty easily

exports.create = (model, data) => {
  // build string of columns for query
  // build string of placeholders
  // build array of values
  // { name: 'Jimmy', age: 24 } -> columns === 'name, age', placeholders === '$1, $2', values === ['Jimmy', 24]
  let values = [];
  let placeholders = '';
  const columns = Object.keys(data).reduce((acc, val, i, arr) => {
    if (i < arr.length - 1) {
      acc += val + ', '
      placeholders += `$${i + 1}, `
      values.push(data[val]);
    } else {
      acc += val
      placeholders += `$${i + 1}`
      values.push(data[val]);
    }
    return acc;
  }, '');

  return pool.query(`
    INSERT INTO ${model} (${columns})
    VALUES (${placeholders});
  `, [...values])
}

exports.find = model => {
  const view = `get_${model}`;
  return pool.query(`SELECT * FROM ${view};`);
}

exports.findByIdAndUpdate = (model, id, data) => {
  
  const values = Object.values(data);

  // create a string of SETs
  // { name: 'bobby', age: 20 } -> "name = 'bobby', age = 20"
  const updateStr = Object.keys(data).reduce((acc, key, i, arr) => {
    if (i < arr.length - 1) {
      acc += `${key} = $${i + 1}, `;
    } else {
      acc += `${key} = $${i + 1}`;
    }
    return acc;
  }, '');

  return pool.query(`
    UPDATE ${model}
    SET ${updateStr}
    WHERE id = $${values.length + 1};
  `, [...values, id]);
}

exports.findByIdAndRemove = (model, id) => {
  return pool.query(`
    DELETE FROM ${model}
    WHERE id = $1;
  `, [id])
}
