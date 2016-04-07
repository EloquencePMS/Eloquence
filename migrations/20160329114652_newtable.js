
exports.up = function(knex, Promise) {
    return knex.schema.createTableif('roomType', function(table){
        table.string('roomType').primary();
        table.string('ammenities', 4000);

    }).createTable('roomNumbers', function(table){
        table.integer('roomNumber').primary();
        table.string('roomType').references('roomType.roomType');
        table.string('houseKeepingStatus');
    })
};

exports.down = function(knex, Promise) {

};
