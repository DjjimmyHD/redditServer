
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        { email: 'rowValue1', password: 'butts', user_name: 'more butts'},
        { email: 'rowValue2', password: 'butts', user_name: 'more butts'},
        { email: 'rowValue3', password: 'butts', user_name: 'more butts'}
      ]);
    });
};
