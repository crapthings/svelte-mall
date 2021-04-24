import App from './app'

const initApp = function () {
  const target = document.body
  new App({ target })
}

Meteor.startup(initApp)
