_ = require('lodash')

Users = Meteor.users

Categories = new Mongo.Collection('categories')
Orders = new Mongo.Collection('orders')
Products = new Mongo.Collection('products')
