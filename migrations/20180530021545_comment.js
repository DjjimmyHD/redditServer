exports.up = function (knex, Promise) {
    return knex.schema.createTable('comment', (table) => {
        table.increments('id').primary()
        table.string('comment_text')
        table.integer('profile_id').references('profile.id').onDelete('cascade')
        table.integer('post_id').references('post.id').onDelete('cascade')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('comment')

}
