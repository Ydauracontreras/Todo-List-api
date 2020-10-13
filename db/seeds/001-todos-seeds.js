
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {'message': 'rowValue1', 'status': 0},
    
      ]);
    });
};
