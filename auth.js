const passport= require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;


const GOOGLE_CLIENT_ID= '864156717534-iedvojas8pst99mvgmkh9lnjn9tjkhtk.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET= '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';
passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

passport.serializeUser(function(user, done){
   done(null,user);
});

passport.deserializeUser(function(user, done){
    done(null,user);
 });