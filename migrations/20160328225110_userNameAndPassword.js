
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', function(table){
        table.increments('userId').primary();
        table.string('userName').unique();
        table.string('password');
        table.integer('empId').unsigned().references('employees.empId');

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user');
};
