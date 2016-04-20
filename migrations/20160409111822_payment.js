
exports.up = function(knex, Promise) {
  return knex.schema.createTable('payment', function(table){
      table.increments('paymentId').primary();
      table.integer('ccId').unsigned().references('cc.ccId');
      table.integer('cashId').unsigned().references('cash.cashId');
      table.integer('checkId').unsigned().references('check.checkId');
      table.integer('directBillId').unsigned().references('directBill.directBillId');

  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('payment');
};
