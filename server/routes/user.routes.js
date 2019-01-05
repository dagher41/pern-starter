import { Router } from 'express';
import passport from 'passport';

import * as UserController from '../controllers/user.controller';
const router = new Router();

// Add a new Post
router.route('/user/facebook-token-authentication').post(passport.authenticate('facebook-token'), UserController.facebookTokenAuthentication);

router.route('/user/test').post((req, res) => {
  console.log(':::::::::::recieved request:::::::::::');

  res.json({
    success: true,
    data: [{
      yo: 'man'
    }]
  });
});

export default router;
