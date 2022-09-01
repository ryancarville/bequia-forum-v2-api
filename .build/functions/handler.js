'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var create_function_1 = require("./auth/create.function");
module.exports.createAuthorization = create_function_1.createAuthorization;
// create new user
var create_function_2 = require("./register/create.function");
module.exports.register = create_function_2.register;
var get_function_1 = require("./categories/get.function");
var list_function_1 = require("./categories/list.function");
module.exports.getCategory = get_function_1.getCategory;
module.exports.listCategories = list_function_1.listCategories;
var get_function_2 = require("./posts/get.function");
var list_function_2 = require("./posts/list.function");
module.exports.getPost = get_function_2.getPost;
module.exports.listPosts = list_function_2.listPosts;
//# sourceMappingURL=handler.js.map