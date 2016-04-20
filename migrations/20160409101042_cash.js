
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cash', function(table){
        table.increments('cashId').primary();
        table.decimal('amount', 9, 2).notNullable();
        
        table.string('comments');
        table.date('date').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cash');
};
