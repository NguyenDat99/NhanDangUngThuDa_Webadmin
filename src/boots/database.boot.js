var Firebase = require('firebase');
//import { serviceAccount } from '../config/database.config';

const FirebaseConnect = Firebase.initializeApp({
  serviceAccount:'./redimed-9a201-firebase-adminsdk-wsv26-b61e39014e.json',
  databaseURL: "https://redimed-9a201.firebaseio.com"
});


var db = FirebaseConnect.database();
var ref = db.ref("redimed-9a201");
ref.once("value", function(snapshot) {
console.log(snapshot.val());
});
module.exports = FirebaseConnect
