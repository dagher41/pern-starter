import { Router } from 'express';
import passport from 'passport';
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

import * as UserController from '../modules/facebook-authentication/fb-authentication.controller';
const router = new Router();

router
  .post(
    '/user/facebook-token-authentication',
    passport.authenticate('facebook-token'),
    UserController.facebookTokenAuthentication
  )
  .get(
    '/user/profile',
    ensureLoggedIn('/login'),
    UserController.userProfile
  );

router.use((err, _, res, next) => {
  res.status(500).send('Something broke!');
});

export default router;
