import db from '../../models';

const { User, Role, sequelize } = db;

export default class UserBuilder {

  buildUserForFacebook(params) {
    return new Promise((resolve, reject) => {
      User.findOrCreate({ where: { email: params.email } })
        .spread((model, created) => {
          const user = model;
          if (created) {
            this.addRole(user)
              .then(() => resolve(user));
          }
          this.updateAttributes(user, params)
          .then(() => resolve(user));
        })
        .catch(reject);
    });
  }

  addRole(user) {
    return Role.findByPk(Role.types().client)
      .then(role => user.addRole(role));
  }

  updateAttributes(u, params) {
    const user = u;
    user.firstName = params.firstName;
    user.lastName = params.lastName;
    user.signInCount = user.signInCount + 1;
    user.currentSignInAt = sequelize.fn('NOW');
    return user.save();
  }
}
