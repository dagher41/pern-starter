
const passport = require('passport');
const LocalStrategy = require('passport-local');

import db from '../models';
const { User } = db;

passport.use(new LocalStrategy({
  usernameField: '',
  passwordField: '',
  session: true
}, () => { /* this will never be used */ }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id, { attributes: ['id', 'firstName', 'lastName', 'email', 'disabled'] })
    .then(user => done(null, user))
    .catch(err => done(err, null));
});
