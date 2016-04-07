
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('user', function(table){
        table.string('userName').unique();

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user');

};
