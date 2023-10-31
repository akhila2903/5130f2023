const firebaseConfig = {
  apiKey: "AIzaSyDbhNxMty_3eu8e3nVyHkYcmERmrn4RpWE",
  authDomain: "first-webapp-8aef8.firebaseapp.com",
  databaseURL: "https://first-webapp-8aef8-default-rtdb.firebaseio.com",
  projectId: "first-webapp-8aef8",
  storageBucket: "first-webapp-8aef8.appspot.com",
  messagingSenderId: "63376560026",
  appId: "1:63376560026:web:d3ef8e2ce56a1687aaf423",
  measurementId: "G-EP8ZEFZZVG"
};

// intialize firebase
firebase.initializeApp(firebaseConfig);

// reference for my data base
var userinfoDB = firebase.database().ref('userinfo');

document.getElementById('userinfo').addEventListener('submit', submitForm);


function submitForm(e){
  e.preventDefault();
  var name = getElementVal('name');
  var email = getElementVal('emailid');
  var msg = getElementVal('Gender');
  var city = getElementVal('city');
  var msg = getElementVal('msg');



  console.log(name,email,Gender,city,msg);
  saveMessages(name,email,Gender,city,msg);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(() =>{
      document.querySelector('.alert').style.display = 'none';
  }, 2000);
  
  document.getElementById('userinfo').reset();
}

const saveMessages = (name,email,Gender,city,msg) => {
  var newuserinfo= userinfoDB.push();
  newuserinfo.set({
      name:name,
      email:email,
      Gender:Gender,
      city:city,
      msg: msg
  });
};


const getElementVal = (id) => {
  return document.getElementById(id).value;
};