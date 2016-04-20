

exports.seed = function(knex, Promise) {
  return Promise.join(
      // Deletes ALL existing entries

      knex('jobs').del(),
      knex('roomNumbers').del(),

      // Inserts seed entries

      
     
      knex('jobs').insert({jobId: 1, title: 'GM', description: 'General Manager', function: 0, departmentId: 1}),
      knex('jobs').insert({jobId: 2, title: 'AGM', description: 'Assitant General Manager', function: 1, departmentId: 1}),
      knex('jobs').insert({jobId: 3, title: 'HKM', description: 'Housekeeping Manager', function: 2, departmentId: 3}),
      knex('jobs').insert({jobId: 4, title: 'MM', description: 'Maintenance Manager', function: 2, departmentId: 5}),
      knex('jobs').insert({jobId: 5, title: 'FDM', description: 'Front Desk Manager', function: 2, departmentId: 2}),
      knex('jobs').insert({jobId: 6, title: 'SM', description: 'Sales Manager', function: 2, departmentId: 4}),
      knex('jobs').insert({jobId: 7, title: 'HK', description: 'Housekeeper', function: 4, departmentId: 3}),
      knex('jobs').insert({jobId: 8, title: 'NA', description: 'Night Auditor', function: 3, departmentId: 2}),
      knex('jobs').insert({jobId: 9, title: 'FDA', description: 'Front Desk Associate', function: 4, departmentId: 2}),
      knex('jobs').insert({jobId: 10, title: 'SA', description: 'Sales Associate', function: 3, departmentId: 4}),
      knex('jobs').insert({jobId: 11, title: 'MA', description: 'Maintenance Associate', function: 4, departmentId: 5}),
      knex('jobs').insert({jobId: 12, title: 'HKS', description: 'Housekeeping Supervisor', function: 3, departmentId: 3}),
      knex('jobs').insert({jobId: 13, title: 'FDS', description: 'Front Desk Supervisor', function: 3, departmentId: 2}),

      knex('roomNumbers').insert({roomNumber:101, roomType:'NKS', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:102, roomType:'NKS', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:103, roomType:'NQQ', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:104, roomType:'NQQ', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:105, roomType:'NK', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:106, roomType:'NK', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:107, roomType:'NQQS', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:108, roomType:'NQQS', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:109, roomType:'NK', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:110, roomType:'NQQ', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:201, roomType:'NQQ', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:202, roomType:'NK', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:203, roomType:'NQQS', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:204, roomType:'NK', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:205, roomType:'NQQ', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:206, roomType:'NKS', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:207, roomType:'NKS', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:208, roomType:'NQQS', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:209, roomType:'NQQS', houseKeepingStatusId: 1}),
      knex('roomNumbers').insert({roomNumber:210, roomType:'NKS', houseKeepingStatusId: 1})


  );
};
