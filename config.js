const firebase = require("firebase")

const firebaseConfig = {
  apiKey: "AIzaSyDiFu4P_qVA35PlQEVHDxIM4h5ueXP3vZo",
  authDomain: "jacp-proyecto-backfront.firebaseapp.com",
  projectId: "jacp-proyecto-backfront",
  storageBucket: "jacp-proyecto-backfront.appspot.com",
  messagingSenderId: "73392607267",
  appId: "1:73392607267:web:77cae6552a961ca894a196"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const User = db.collection('Users')

module.exports = User