exports.up = (knex) =>
    knex.schema.createTable("User", (tbl) => {
        tbl.increments("id").primary()
        tbl.string("email", 128).notNullable().unique()
        tbl.timestamps(true, true)
    })

exports.down = (knex) => knex.schema.dropTableIfExists("User")
