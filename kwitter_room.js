
var firebaseConfig=
{
      apiKey:AIzaSyAIzzPHTl2qtLAxFCSY-P8-mLZngIsrHsM
      authDomain: "mario-garcia-gyte.firebaseapp.com",
      databaseURL: "https://mario-garcia-gyte-default-rtdb.firebaseio.com",
      projectId: "mario-garcia-gyte",
      storageBucket: "mario-garcia-gyte.appspot.com",
      messagingSenderId: "941453871823",
      appId: "1:941453871823:web:bb85c38c399ab28bb785ba",

}

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
Room_name=localStorage.getItem("room_name").value;

function Send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(Room_name).push({
       name:user_name,
       message:msg,
       like:0     
      });
}















function addUser() 
{ 
      user_name = document.getElementById("user_name").value;
       firebase.database().ref("/").child(user_name).update({ purpose : "adding user" });


function addRoom()
{
      Room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_name).update({
      purpose : "adding room name"      
      });
      localStorage.setItem("room_name",Room_name);
      window.location="index.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name-"+Room_names);
       row = "<div class='room_name' id=+"Room_names+" onclick='redirectToRoomName(this.id)'># "+Room_names+"<div><hr>"; 


      
      });});}
      
getData();

Function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location="index.html" 
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}