var googleDrive = require('google-drive')

var token = 'abc123456'
 , fileId = 'def123456'

function getFile( token, fileId, callback ) {
 googleDrive( token ).files( fileId ).get( callback )
}

function uploadFile( token, fileId, callback ) {
    googleDrive( token ).files().insert( meta, params, callback )
}

function listFiles( token, callback ) {
 googleDrive( token ).files().get( callback )
}

function callback( err, response, body ) {
 if ( err ) return console.log( 'err', err )
 console.log( 'response', response )
 console.log( 'body', JSON.parse( body ) )
}