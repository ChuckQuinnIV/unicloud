var Dropbox = require('dropbox');
var dbx = new Dropbox({accessToken: ''});

dbx.usersGetSpaceUsage()
  .then(function(response) {
    console.log(response.allocation.individual.allocated - response.used);
  }).catch(function(err) {
    console.log(err);
  })
