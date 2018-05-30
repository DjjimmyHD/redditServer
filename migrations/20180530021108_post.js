exports.up = function (knex, Promise) {
    return knex.schema.createTable('post', (table) => {
        table.increments()
        table.string('url')
        table.string('title')
        table.integer('votes').defaultTo(0)
        table.integer('profile_id').references('profile.id').onDelete('cascade')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('post')

}
