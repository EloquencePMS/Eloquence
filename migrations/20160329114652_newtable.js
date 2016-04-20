
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roomType', function(table){
        table.string('roomType').primary();
        table.string('ammenities', 4000);

    }).createTable('houseKeepingStatus', function(table){
        table.increments('houseKeepingStatusId').primary();
        table.string('name').notNullable();
        table.string('description');
        
    }).createTable('roomNumbers', function(table){
        table.integer('roomNumber').primary();
        table.string('roomType').references('roomType.roomType');
        table.integer('houseKeepingStatusId').unsigned().references('houseKeepingStatus.houseKeepingStatusId');
    });
};

exports.down = function(knex, Promise) {

};
