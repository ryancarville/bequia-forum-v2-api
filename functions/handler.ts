'use strict'

import { createAuthorization } from './auth/create.function'
module.exports.createAuthorization = createAuthorization

// create new user
import { register } from './register/create.function'
module.exports.register = register

import { getCategory } from './categories/get.function'
import { listCategories } from './categories/list.function'

module.exports.getCategory = getCategory
module.exports.listCategories = listCategories

import { getPost } from './posts/get.function'
import { listPosts } from './posts/list.function'

module.exports.getPost = getPost
module.exports.listPosts = listPosts