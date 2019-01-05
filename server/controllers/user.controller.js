import db from '../models';
const { UserImage } = db;

// /**
//  * Get all posts
//  * @param req
//  * @param res
//  * @returns void
//  */
export function facebookTokenAuthentication(req, res) {
  // do something with req.user
  if (req.user) {
    UserImage.findAll({ where: { user_id: req.user.id, status: 1 } })
      .then(images => {
        res.json({
          id: req.user.id,
          email: req.user.email,
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          disabled: req.user.disabled,
          images: images.map(image => { return { url: image.url, id: image.id }; })
        });
      });
  } else {
    req.json({ success: false });
  }
}

// /**
//  * Save a post
//  * @param req
//  * @param res
//  * @returns void
//  */
// export function addPost(req, res) {
//   if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
//     res.status(403).end();
//   }

//   Post.create(req.body.post)
//   .then((newPost, err) => {
//     // Let's sanitize inputs
//     newPost.title = sanitizeHtml(newPost.title);
//     newPost.name = sanitizeHtml(newPost.name);
//     newPost.content = sanitizeHtml(newPost.content);

//     newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
//     newPost.cuid = cuid();
//     return newPost.save();
//   })
//   .then(post => {
//       res.json({ post: post });
//   });
// }

// /**
//  * Get a single post
//  * @param req
//  * @param res
//  * @returns void
//  */
// export function getPost(req, res) {
//   Post.findOne({ cuid: req.params.cuid })
//   .then((post, err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ post });
//   });
// }

// /**
//  * Delete a post
//  * @param req
//  * @param res
//  * @returns void
//  */
// export function deletePost(req, res) {
//   Post.findOne({ cuid: req.params.cuid })
//   .then((post, err) => {
//     if (err) {
//       res.status(500).send(err);
//     }

//     return post.destroy();
//   })
//   .then(() => {
//     res.status(200).end();
//   });
// }
