
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('folio', function(table){
     table.decimal('setRate', 9, 2);
      table.string('ccType');
      table.string('ccName');
      table.integer('ccNum');
      table.date('expiration');
      table.decimal('authorization', 9, 2);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('setRate').dropColumn('ccType').dropColumn('ccName').dropColumn('ccNum')
      .dropColumn('expiration').dropColumn('authorization')
};
