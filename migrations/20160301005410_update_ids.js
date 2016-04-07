
exports.up = function(knex, Promise) {
    return knex.schema.createTable('guest', function(table){
        table.increments('guestId').primary();
        table.string('fName');
        table.string('lName');
        table.string('street');
        table.string('city');
        table.string('state', 2);
        table.string('zipcode');
        table.string('email');
        table.string('phoneNum');
        table.integer('compId').unsigned().references('company.companyId');

    });

};

exports.down = function(knex, Promise) {
  
};
