
exports.up = function(knex, Promise) {
    return knex.schema.createTable('check', function(table){
        table.increments('checkId').primary();
        table.string('checkNum').notNullable();
        table.date('date').notNullable();
        table.decimal('amount', 9, 2).notNullable();
        table.string('comments');
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('check');
};
