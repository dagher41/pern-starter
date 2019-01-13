import FbAuthInteractor from './fb-authentication.interactor';

// /**
//  * Get all posts
//  * @param req
//  * @param res
//  * @returns void
//  */
export function facebookTokenAuthentication(req, res) {
  if (req.user) {
    const interactor = new FbAuthInteractor();
    interactor.processUserAuthentication(req.user)
      .then(response => res.json(response))
      .catch(() => res.send(404));
  } else {
    req.json({ success: false });
  }
}

export function userProfile(req, res) {
  const interactor = new FbAuthInteractor();
  interactor.processUserAuthentication(req.user)
  .then(response => res.json(response))
  .catch(() => res.send(404));
}
