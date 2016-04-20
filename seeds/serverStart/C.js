
exports.seed = function(knex, Promise) {
  return Promise.join(
      // Deletes ALL existing entries

      knex('employees').del(),

      // Inserts seed entries
      knex('employees').insert({empId: 1, fName: 'General', lName: 'Manager', street:'hotel', city:'hotelsCity',
        state:'NA', zip:00000, phone:'hotelsPhone', email:'gm@hotel.com', jobId:1, hourlyWage: null, salary: null,
        hireDate:null, terminationDate:null})
  );
};
