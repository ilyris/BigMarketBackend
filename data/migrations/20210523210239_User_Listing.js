exports.up = (knex) =>
    knex.schema.createTable("User_Listing", (tbl) => {
        tbl.increments("id").primary()
        tbl.integer("posting_seller_id").notNullable().references("id").inTable("User")
        tbl.string("posting_title", 128).notNullable()
        tbl.string("posting_price", 128).notNullable()
        tbl.string("posting_address", 128).notNullable()
        tbl.string("posting_city", 128).notNullable()
        tbl.string("posting_state", 128).notNullable()
        tbl.string("posting_postal_code", 128).notNullable()
        tbl.string("posting_description", 128).notNullable()
        tbl.string("posting_category", 128).notNullable()
        tbl.boolean("posting_show_number", 128).notNullable()
        tbl.boolean("posting_used_product", 128).notNullable()
        tbl.timestamps(true, true)
    })

exports.down = (knex) => knex.schema.dropTableIfExists("User_Listing")