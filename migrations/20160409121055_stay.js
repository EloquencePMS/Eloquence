
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stay', function (table) {
        table.increments('stayId').primary();
        table.date('checkInDate').notNullable();
        table.date('checkOutDate').notNullable();
        table.string('status').notNullable();
        table.integer('rateId').unsigned().references('rate.rateId').notNullable();
        table.integer('marketId').unsigned().references('market.marketId');
        table.integer('folioId').unsigned().references('folio.folioId').notNullable();
        table.integer('guestId').unsigned().references('guest.guestId').notNullable();
        table.integer('empId').unsigned().references('employees.empId');
        table.integer('locationId').unsigned().references('location.locationId').notNullable();
        table.integer('roomNumber').references('roomNumbers.roomNumber');
        table.string('roomType').references('roomType.roomType').notNullable();
        table.integer('taxProfile').unsigned().references('taxProfile.taxId').notNullable();

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('stay');
};
