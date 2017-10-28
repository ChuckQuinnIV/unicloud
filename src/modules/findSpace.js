var Dropbox = require('dropbox');
var dbx = new Dropbox({accessToken: 'TMUBdqBFjEAAAAAAAAAAEd8_9HuoYxBSnA0rzIt5AJCsnpBMsnVioa_boBWk9EEk'});

dbx.usersGetSpaceUsage()
  .then(function(response) {
    console.log(response.allocation.individual.allocated - response.used);
  }).catch(function(err) {
    console.log(err);
  })
