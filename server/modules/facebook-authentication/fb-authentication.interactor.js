import FbProfileFacade from './fb-profile.facade';
import UserBuilder from '../../modules/users/user-builder';
import AuthenticationProviderBuilder from '../authentication-providers/authentication-provider-builder';
import UserImageSetter from '../user-images/image-setter';

export default class FBAuthInteractor {

  static processFacebookResponse(accessToken, refreshToken, profileResponse, done) {
    const fbProfile = FbProfileFacade.fromResponse(profileResponse, accessToken, refreshToken);
    const userBuilder = new UserBuilder();
    userBuilder.buildUserForFacebook(fbProfile)
      .then((user) => {
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

  processUserAuthentication(user) {
    return new Promise((resolve, reject) => {
      user.getActiveImages()
        .then(images => {
          return resolve(this._userAuthenticationResponse(Object.assign(user, { images })));
        })
        .catch(reject);
    });
  }

  _userAuthenticationResponse({ id, email, firstName, lastName, disabled, images }) {
    return Object.assign(
      { id, email, firstName, lastName, disabled },
      { images: images.map(({ id, url }) => Object.assign({ id, url })) }
    );
  }
}
