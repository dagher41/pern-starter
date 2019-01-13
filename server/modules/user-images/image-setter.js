import db from '../../models';
const { UserImage } = db;
export default class UserImageSetter {

  setImagesForUser(user, imageUrls) {
    return new Promise((resolve, reject) => {
      UserImage.update({
        status: 0
      }, {
        where: {
          user_id: user.id
        }
      })
      .then(() => UserImage.bulkCreate(imageUrls.map(url => { return { url, user_id: user.id }; })))
      .then(() => resolve(user))
      .catch(reject);
    });
  }
}
