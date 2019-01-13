import db from '../../models';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
const { Post } = db;

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  Post.findAll()
    .then((posts, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ posts });
    });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  Post.create(req.body.post)
    .then((post, err) => {
      // Let's sanitize inputs
      const newPost = post;
      newPost.title = sanitizeHtml(newPost.title);
      newPost.name = sanitizeHtml(newPost.name);
      newPost.content = sanitizeHtml(newPost.content);

      newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
      newPost.cuid = cuid();
      return newPost.save();
    })
    .then(post => {
      res.json({ post });
    });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid })
    .then((post, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ post });
    });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({ cuid: req.params.cuid })
    .then((post, err) => {
      if (err) {
        res.status(500).send(err);
      }

      return post.destroy();
    })
    .then(() => {
      res.status(200).end();
    });
}
