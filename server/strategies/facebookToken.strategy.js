const FacebookTokenStrategy = require('passport-facebook-token');
const passport = require('passport');

import FacebookAuthenticationInteractor from '../services/interactors/facebook-authentication-interactor';

passport.use(new FacebookTokenStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  enableProof: false
}, FacebookAuthenticationInteractor.processResponse));
