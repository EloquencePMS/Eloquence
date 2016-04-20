
exports.up = function(knex, Promise) {
    return knex.schema.createTable('departments', function(table){
        table.increments('depId').primary();
        table.string('name').notNullable();
    }).createTable('jobs', function(table){
        table.increments('jobId').primary();
        table.string('title').notNullable();
        table.string('description');
        table.integer('function').notNullable();
        table.integer('departmentId').unsigned().references('departments.depId');
    }).createTable('employees', function(table){
        table.increments('empId').primary();
        table.string('fName').notNullable();
        table.string('lName').notNullable();
        table.string('street').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.integer('zip').notNullable();
        table.string('phone').notNullable();
        table.string('email').notNullable();
        table.integer('jobId').unsigned().references('jobs.jobId');
        table.decimal('hourlyWage', 8, 2);
        table.decimal('salary', 8 , 2);
    }).alterTable('employees', function (table) {
        table.date('hireDate');
        table.date('terminationDate');
    });

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('departments').dropTable('jobs').dropTable('employees');
};
