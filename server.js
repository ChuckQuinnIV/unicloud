var express = require('express');
var path = require('path');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/index.html'));
});

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login

app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
      successRedirect : '/profile',
      failureRedirect : '/'
  }));

// route for logging out
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');

}

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});