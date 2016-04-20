
exports.up = function(knex, Promise) {
  return knex.schema.createTable('directBill', function(table){
        table.increments('directBillId').primary();
        table.integer('arAccountNumber').unsigned().references('accountsReceivable.arAccountNumber');
        table.decimal('amount', 9, 2).notNullable();
        table.date('date').notNullable();
        table.string('comments');

    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('directBill');
};
