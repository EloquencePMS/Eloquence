
exports.up = function(knex, Promise) {
  return knex.schema.createTable('chargeType', function(table){
        table.increments('chargeTypeId').primary();
        table.string('chargeName');
        table.integer('taxId').unsigned().references('taxProfile.taxId');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('chargeType');
};
