
exports.up = function(knex, Promise) {
  return knex.schema.createTable('housekeepingAssignments', function(table) {
      table.increments('HKAssignmentId').primary();
      table.integer('roomNumber').references('roomNumbers.roomNumber');
      table.integer('empId').unsigned().references('employees.empId');
  });
};

exports.down = function(knex, Promise) {
  
};
