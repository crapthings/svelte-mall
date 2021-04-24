useTracker = require('meteor/rdb:svelte-meteor-data').useTracker

Meteor.psub = Meteor.psubscribe = function (...args) {
  return new Promise(function (resolve, reject) {
    Meteor.subscribe(...args, {
      onReady (handler) {
        handler.then(function () {
          resolve()
        })
      }
    })
  })
}
