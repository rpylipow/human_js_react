import app from 'ampersand-app'
import styles from './styles/main.styl'
import icons from '../node_modules/octicons/octicons/octicons.css'
import Router from './router'
import Me from './models/me'

// Expose app for console
window.app = app

app.extend({
  init () {
    this.me = new Me()
    this.me.fetchInitialData()
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
