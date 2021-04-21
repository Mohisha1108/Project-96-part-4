firebaseConfig = {
    apiKey: "AIzaSyC5YAO8D4Knxi0N116YjH6142KMDTAFHGc",
    authDomain: "mohisha-s-bot-wtjf.firebaseapp.com",
    databaseURL: "https://mohisha-s-bot-wtjf-default-rtdb.firebaseio.com",
    projectId: "mohisha-s-bot-wtjf",
    storageBucket: "mohisha-s-bot-wtjf.appspot.com",
    messagingSenderId: "813436354215",
    appId: "1:813436354215:web:26fc2e84b6f8f89e516582"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("user_name");
  roomname = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
      
//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name : username,
          message : msg,
          like : 0
    });
    document.getElementById("msg").value = "";
}
function log_out()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

