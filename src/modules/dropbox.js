var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: ''});

function cont(response) {
  if(response.has_more) {
    dbx.filesListFolderContinue({cursor: response.cursor})
      .then(function(response) {
        console.log(response);
        cont(response);
      })
      .catch(function(error) {
        console.log(error);
      })
  }
}

dbx.filesListFolder({path: '', recursive: true})
  .then(function(response) {
    console.log(response);
    cont(response);
  })
  .catch(function(error) {
    console.log(error);
  })
