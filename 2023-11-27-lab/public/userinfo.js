var firebaseConfig = {
  apiKey: "AIzaSyD_jyDeWkeYDxf8e_nA0TfEDNJKNEcMB_I",
  authDomain: "authentication-app-1c87d.firebaseapp.com",
  databaseURL: "https://authentication-app-1c87d-default-rtdb.firebaseio.com",
  projectId: "authentication-app-1c87d",
  storageBucket: "authentication-app-1c87d.appspot.com",
  messagingSenderId: "622779199054",
  appId: "1:622779199054:web:1659fad13cd7ee6b83dd1f",
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function onSubmit() {
  database.ref("data").set({
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  });
  reset();
  database.ref("data").once("value", function (snapshot) {
    var data = snapshot.val();
    alert(
      "Thank you " +
        data.fname +
        " For Submitting Form and details saved in database"
    );
    console.log(data.name);
    console.log(data.age);
  });
}

function reset() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("cl").value = "";
  document.getElementById("dob").value = "";
  
}
