
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').del()
        .then(function () {
          return knex('profile').del()
        })
    });
};
