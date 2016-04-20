

exports.seed = function(knex, Promise) {
  return Promise.join(
      // Deletes ALL existing entries
      knex('departments').del(),
      knex('market').del(),
      knex('rate').del(),
      knex('roomType').del(),
      knex('houseKeepingStatus').del(),
      knex('taxRate').del(),

      // Inserts seed entries
      knex('departments').insert({depId: 1, name: 'General Management'}),
      knex('departments').insert({depId: 2, name: 'Front Desk'}),
      knex('departments').insert({depId:3, name:'Housekeeping'}),
      knex('departments').insert({depId:4, name:'Sales'}),
      knex('departments').insert({depId:5, name:'Maintenance'}),

      knex('market').insert({marketId:1, title:'Walk In'}),

      knex('rate').insert({rateId:1, name:'BAR', rate: 99.99, description: 'Best Available Rate'}),

      knex('taxRate').insert({taxRateId:1 , state:0.065, county:0.005, occupancy:0.020}),

      knex('roomType').insert({roomType:'NK', ammenities:'Non Smoking King'}),
      knex('roomType').insert({roomType:'NQQ', ammenities:'Non Smoking Double Queen'}),
      knex('roomType').insert({roomType:'NKS', ammenities:'Non Smoking King Suite'}),
      knex('roomType').insert({roomType:'NQQS', ammenities:'Non Smoking Double Queen Suite'}),

      knex('houseKeepingStatus').insert({houseKeepingStatusId: '1', name: 'Clean', description: 'Clean ready for occupation'}),
      knex('houseKeepingStatus').insert({houseKeepingStatusId: '2', name: 'Dirty', description: 'Dirty needs housekeeping'}),
      knex('houseKeepingStatus').insert({houseKeepingStatusId: '3', name: 'RFI', description: 'Ready For Inspection'}),
      knex('houseKeepingStatus').insert({houseKeepingStatusId: '4', name: 'Reclean', description: 'Room failed inspection needs to be recleaned'}),
      knex('houseKeepingStatus').insert({houseKeepingStatusId: '5', name: 'OOO', description: 'Out of Order'})

      
  );
};
