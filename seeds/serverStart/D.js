var bcrypt = require('bcrypt');
var setPassword = function (password){
  var salt = bcrypt.genSaltSync( 1024 );
  return bcrypt.hashSync( password, salt );
}


exports.seed = function(knex, Promise) {
  return Promise.join(
      // Deletes ALL existing entries
      knex('user').del(),


      // Inserts seed entries
      knex('user').insert({userId:1, userName:'GeneralManager', password: setPassword('generalManager'), empId: 1})
  );
};
