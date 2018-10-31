
const config = {
  apiKey: "AIzaSyBzIj2D-7HBsmmrcKWwtWEdJma6XUzfiII",
  authDomain: "mercado-dev-logusit.firebaseapp.com",
  databaseURL: "https://mercado-dev-logusit.firebaseio.com",
  projectId: "mercado-dev-logusit",
  storageBucket: "mercado-dev-logusit.appspot.com",
  messagingSenderId: "1071493730821"
}

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()
export default base