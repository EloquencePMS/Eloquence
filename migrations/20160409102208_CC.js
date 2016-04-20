
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cc', function(table){
        table.increments('ccId').primary();
        table.string('ccType').notNullable();
        table.date('date').notNullable();
        table.string('ccName').notNullable();
        table.string('ccZipcode');
        table.integer('ccNum').notNullable();
        table.date('expiration').notNullable();
        table.decimal('chargedAmount', 9, 2).notNullable();
        table.decimal('authroizedAmount', 9, 2).notNullable();
        table.string('comments');
    });
};

exports.down = function(knex, Promise) {
        return knex.schema.dropTable('cc');
};
