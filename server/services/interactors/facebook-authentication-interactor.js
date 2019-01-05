import FacebookProfileAdapter from '../gateways/facebook/facebook-profile-adapter';
import UserBuilder from '../domain/users/user-builder';
import AuthenticationProviderBuilder from '../domain/authentication-providers/authentication-provider-builder';
import UserImageSetter from '../domain/user-images/image-setter';

export default class FacebookAuthenticationInteractor {

  static processResponse(accessToken, refreshToken, profileResponse, done) {
    const fbProfile = FacebookProfileAdapter.fromResponse(profileResponse, accessToken, refreshToken);
    const userBuilder = new UserBuilder();
    userBuilder.buildUserForFacebook(fbProfile)
    .then(user => {
      const authProviderBuilder = new AuthenticationProviderBuilder();
      return authProviderBuilder.build(user, fbProfile);
    })
    .then(user => {
      const setter = new UserImageSetter();
      return setter.setImagesForUser(user, fbProfile.imageUrls);
    })
    .then(user => {
      done(null, user);
    })
    .catch(error => {
      done(error);
    });
  }
}
