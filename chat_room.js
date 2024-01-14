
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
   apiKey: "AIzaSyC-b_0m57PjeRgfMm01Klg2t3PRbf5i1a4",
   authDomain: "kwitter-10af2.firebaseapp.com",
   projectId: "kwitter-10af2",
   storageBucket: "kwitter-10af2.appspot.com",
   messagingSenderId: "240259011022",
   appId: "1:240259011022:web:4f94e9ade88f17ee371b9f",
   measurementId: "G-PJT9Z5L72V"
};

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose : "adding room name" });
localStorage.setItem("room_name" , room_name);
window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code
 console.log("Room Nmae - " + Room_names);
 row  = "<div class='room_name' id="+Room_names" onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
 document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "chat_page.html";
}

function logout()
{
localStorage.removeItem(user_name);
localStorage.removeItem("room_name");
window.location = "index.html";
}
