'use strict'

const Router = require('express')
const router = new Router()
const postController = require('../controller/post.controller')

router.post('/post', postController.createPost)
router.get('/post', postController.getPostsById)
router.get('/post/:id', postController.getOnePost)
router.put('/post', postController.updatePost)
router.delete('/post/:id', postController.deletePost)

module.exports = router