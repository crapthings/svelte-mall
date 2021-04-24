import '/imports/global'
import '/imports/server'

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
