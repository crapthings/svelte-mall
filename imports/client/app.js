import App from './app.html'

const initApp = function () {
  const target = document.body
  new App({ target })
}

Meteor.startup(initApp)
