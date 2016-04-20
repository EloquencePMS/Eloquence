
exports.up = function(knex, Promise) {
    return knex.schema.createTable('guest', function(table){
        table.increments('guestId').primary();
        table.string('fName').notNullable();
        table.string('lName').notNullable();
        table.string('street').notNullable();
        table.string('city').notNullable();
        table.string('state', 2).notNullable();
        table.string('zipcode').notNullable();
        table.string('email');
        table.string('phoneNum').notNullable();
        table.integer('compId').unsigned().references('company.companyId');

    });

};

exports.down = function(knex, Promise) {
  
};
