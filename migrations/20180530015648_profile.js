
exports.up = function(knex, Promise) {
    return knex.schema.createTable('profile', (table) => {
        table.increments()
        table.string('email')
        table.string('password')
        table.string('user_name')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('profile');
 
};
