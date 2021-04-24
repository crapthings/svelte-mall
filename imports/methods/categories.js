Meteor.methods({
  newCategory (category) {
    Categories.insert(category)
  },

  removeCategory (_id) {
    Categories.remove({ _id })
  },

  moveCategory (_id, parentId) {
    if (_id === parentId) return

    move(parentId)

    function move (_parentId) {
      const category = Categories.findOne(_parentId)

      if (!category) {
        Categories.update(_id, { $set: { parentId } })
        return
      }

      if (category._id === _id) {
        const firstChildIds = Categories.find({ parentId: _id }).map(({ _id}) => _id)
        const selector = { _id: { $in: firstChildIds } }
        if (category.parentId) {
          Categories.update(selector, { $set: { parentId: category.parentId } }, { multi: true })
          Categories.update(_id, { $set: { parentId } })
        } else {
          Categories.update(selector, { $unset: { parentId: '' } }, { multi: true })
          Categories.update(_id, { $set: { parentId } })
        }
        return
      }

      move(category.parentId)
    }
  },
})
