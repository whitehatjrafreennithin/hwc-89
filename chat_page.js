//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCPXMYK3wdDFVZZzhmq8tCCAB9E0qFsINc",
      authDomain: "letscatchat.firebaseapp.com",
      databaseURL: "https://letscatchat-default-rtdb.firebaseio.com",
      projectId: "letscatchat",
      storageBucket: "letscatchat.appspot.com",
      messagingSenderId: "336051386403",
      appId: "1:336051386403:web:7d3409a149719a98df1996"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            Like:0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();