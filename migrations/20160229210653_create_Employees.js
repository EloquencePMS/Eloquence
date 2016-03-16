
exports.up = function(knex, Promise) {
  return knex.schema.createTable('departments', function(table){
      table.increments('depId').primary();
      table.string('name');
  }).createTable('jobs', function(table){
      table.increments('jobId').primary();
      table.string('title');
      table.string('description');
      table.integer('function');
      table.integer('departmentId').references('departments.id')
  }).createTable('employees', function(table){
      table.increments('empId').primary();
      table.string('fName');
      table.string('lName');
      table.string('street');
      table.string('city');
      table.string('state');
      table.integer('zip');
      table.string('phone');
      table.string('email');
      table.integer('jobId').references('jobs.id');
      table.double('hourlyWage');
      table.double('salary');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('departments').dropTable('jobs').dropTable('employees');
};
