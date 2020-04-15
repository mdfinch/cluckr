
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('clucks').insert([
        {id: 1, username: 'john', content: "john didn't put a picture"},
        {id: 2, username: 'daniel', content: "daniel didn't put a picture"},
        {id: 3, username: 'sara', content: "sara didn't put a picture"}
      ]);
    });
};
