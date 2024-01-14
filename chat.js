// Your web app's Firebase configuration
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}


