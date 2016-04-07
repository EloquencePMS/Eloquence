
exports.up = function(knex, Promise) {
    return knex.schema.createTable('taxProfile', function(table){
        table.increments('taxId').primary();
        table.double('state', 3);
        table.double('county', 3);
        table.double('occupency', 3);
        table.boolean('st');
        table.boolean('ct');
        table.boolean('oc');
    }).createTable('rate', function(table){
        table.increments('rateId').primary();
        table.string('name');
        table.double('rate', 2);
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
