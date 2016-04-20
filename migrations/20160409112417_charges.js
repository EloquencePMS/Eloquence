
exports.up = function(knex, Promise) {
    return knex.schema.createTable('folio', function(table){
        table.increments('folioId').primary();
        
    }).createTable('charge', function(table){
        table.increments('chargeId').primary();
        table.integer('folioId').unsigned().references('folio.folioId');
        table.integer('chargeTypeId').unsigned().references('chargeType.chargeTypeId');
        table.date('date').notNullable();
        table.double('amount', 9, 2).notNullable();
        table.string('comments');
    }).alterTable('payment', function(table){
        table.integer('folioId').unsigned().references('folio.folioId');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('charges');
};
