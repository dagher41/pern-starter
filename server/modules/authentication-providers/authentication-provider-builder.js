import db from '../../models';
const { AuthenticationProvider } = db;

export default class AuthenticationProviderBuilder {

  build(user, fbProfile) {
    return new Promise((resolve, reject) => {
      return AuthenticationProvider.create({
        user_id: user.id,
        payload: fbProfile,
        authorizationToken: fbProfile.accessToken,
        name: AuthenticationProvider.providers().facebookToken
      })
      .then((provider) => {
        resolve(user, provider);
      })
      .catch(reject);
    });
  }
}
