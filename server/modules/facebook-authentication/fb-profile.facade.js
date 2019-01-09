class FacebookProfileAdapter {
  constructor({ email, firstName, lastName, imageUrls, accessToken, refreshToken, response }) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrls = imageUrls;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.rawResponse = response;
  }

  static fromResponse(response, accessToken, refreshToken) {
    const email = response.emails.length > 0 && response.emails[0].value;
    const imageUrls = response.photos.map(image => image.value);
    return new FacebookProfileAdapter({
      response,
      email,
      accessToken,
      refreshToken,
      imageUrls,
      firstName: response.name.givenName,
      lastName: response.name.familyName
    });
  }
}

export default FacebookProfileAdapter;
