import '/imports/global'
import '/imports/server'

import faker from 'faker'

Meteor.startup(function () {
  // Users.remove({})
  if (Users.findOne()) return

  Accounts.createUser({
    username: 'admin',
    password: 'admin',
    role: 'administrator',
    displayName: '管理员',
  })
})


Meteor.startup(function () {
  Products.remove({})
  if (Products.findOne()) return

  const products = _.times(100, () => ({
    _id: Random.id(),
    name: faker.lorem.words(),
  }))

  Products.rawCollection().insertMany(products)
})
