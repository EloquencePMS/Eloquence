
exports.up = function(knex, Promise) {
    return knex.schema.createTable('location', function (table) {
        table.increments('locationId').primary();
        table.string('phoneNumber').notNullable();
        table.string('streetNumber').notNullable();
        table.string('street').notNullable();
        table.string('city').notNullable();
        table.string('state', 2).notNullable();
        table.string('zip').notNullable();


    }).createTable('market', function (table) {
        table.increments('marketId').primary();
        table.string('title').notNullable();
        table.string('description');


    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('location').dropTable('market');
};
