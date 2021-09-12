'use strict'

const db = require('../bd')


class PostController {
  async createPost(req, res) {
    const {title, content, user_id} = req.body
    const newPost =await db.query('INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, user_id])
    res.json(newPost.rows[0])
  }
  async getPostsById(req, res) {
    const id = req.query.id
    const posts = await db.query('SELECT * FROM post where user_id = $1', [id])
    res.json(posts.rows)

  }
  async getOnePost(req, res) {}
  async updatePost(req, res) {}
  async deletePost(req, res) {}
}


module.exports = new PostController()
