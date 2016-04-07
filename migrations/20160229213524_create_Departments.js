
exports.up = function(knex, Promise) {
    knex.schema.alterTable('employees', function (table) {
        table.date('hireDate');
        table.date('terminationDate');
    });
};

exports.down = function(knex, Promise) {
    
};
