
exports.up = function(knex, Promise) {
    return knex.schema.createTable('accountsReceivable', function(table){
        table.increments('arAccountNumber').primary();
        table.integer('compId').unsigned().references('company.companyId');
        table.string('contactName').notNullable();
        table.string('contactPhone').notNullable();
        table.string('contactEmail');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('accountsReceivable');
};
