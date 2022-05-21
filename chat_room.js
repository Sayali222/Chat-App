var firebaseConfig = {
    apiKey: "AIzaSyAbqj4p_LHhryKGjxvOWdpmt5neGseB-k4",
    authDomain: "lets-chat-web-app-ce4a3.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-ce4a3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-ce4a3",
    storageBucket: "lets-chat-web-app-ce4a3.appspot.com",
    messagingSenderId: "1005963708204",
    appId: "1:1005963708204:web:24fad055f9ae278315ce89"
  };
  initializeApp(firebaseConfig)
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
  
   function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "Chat_App.html";
}

   //End code
   });});}
getData();
