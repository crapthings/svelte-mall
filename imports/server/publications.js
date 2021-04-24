Meteor.publish(null, function () {
  if (!this.userId) return this.stop()
  const fields = { services: false }
  return Users.find({ _id: this.userId }, { fields })
})

Meteor.publish('categories', function () {
  return Categories.find()
})
