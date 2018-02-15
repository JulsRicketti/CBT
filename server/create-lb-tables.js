const server = require('./server');
const ds = server.dataSources.db;
const tables = ['challenge', 'user', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.automigrate(tables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + tables + '] created in ', ds.adapter.name);
  ds.disconnect();
});
