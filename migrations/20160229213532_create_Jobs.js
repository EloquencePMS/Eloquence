
exports.up = function(knex, Promise) {
    return knex.schema.createTable('taxRate',function(table){
        table.increments('taxRateId').primary();
        table.decimal('state', 9, 3);
        table.decimal('county', 9, 3);
        table.decimal('occupancy', 9, 3);
    }).createTable('taxProfile', function(table){
        table.increments('taxId').primary();
        table.integer('taxRateId').unsigned().references('taxRate.taxRateId'),
        table.boolean('state');
        table.boolean('county');
        table.boolean('occupancy');
    }).createTable('rate', function(table){
        table.increments('rateId').primary();
        table.string('name');
        table.decimal('rate', 9, 2);
        table.string('description');
    }).createTable('company', function(table){
        table.increments('companyId').primary();
        table.string('companyName');
        table.string('pointOfContact');
        table.string('phoneNum');
        table.string('email');
        table.string('street');
        table.string('city');
        table.string('state', 2);
        table.string('zipcode');
        table.integer('taxId').unsigned().references('taxProfile.taxId');
        table.integer('rateId').unsigned().references('rate.rateId');

    });
};

exports.down = function(knex, Promise) {
};
