const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');

import FbAuthentication from '../modules/facebook-authentication/fb-authentication.interactor';

passport.use(new FacebookTokenStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  enableProof: false
}, FbAuthentication.processFacebookResponse));
