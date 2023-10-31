
const firebaseConfig = {
    apiKey: "AIzaSyDbhNxMty_3eu8e3nVyHkYcmERmrn4RpWE",
  authDomain: "first-webapp-8aef8.firebaseapp.com",
  projectId: "first-webapp-8aef8",
  storageBucket: "first-webapp-8aef8.appspot.com",
  messagingSenderId: "63376560026",
  appId: "1:63376560026:web:d3ef8e2ce56a1687aaf423",
  measurementId: "G-EP8ZEFZZVG"
  };

// intialize firebase
firebase.initializeApp(firebaseConfig);

// reference for my data base
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('emailid');
    var location = getElementVal('location');
    var msgContent = getElementVal('msgContent');

    console.log(name,email,location,msgContent);
    saveMessages(name,email,location,msgContent);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(() =>{
        document.querySelector('.alert').style.display = 'none';
    }, 2000);
    
    document.getElementById('contactForm').reset();
}

const saveMessages = (name,email,location,msgContent) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name:name,
        email:email,
        location:location,
        msgContent: msgContent
    });
};


const getElementVal = (id) => {
    return document.getElementById(id).value;
};
const userForm = document.getElementById('userForm');
const getSuggestionButton = document.getElementById('getSuggestionButton');
const suggestion = document.getElementById('suggestion');
document.addEventListener('DOMContentLoaded', function () {
    // Geolocation to get the current location
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const currentLocation = document.getElementById('currentLocation');
            currentLocation.value = `Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`;
        });
    }

    // Use a free IP Geolocation API to approximate user's location
    fetch("https://ipinfo.io/json")
        .then(response => response.json())
        .then(data => {
            const fromLocation = document.getElementById('fromLocation');
            fromLocation.value = data.city + ", " + data.country;
        });

    // Use a free API or other data source to populate other facts (e.g., desired location)
    fetch("https://api.example.com/desiredLocation")
        .then(response => response.json())
        .then(data => {
            const desiredLocation = document.getElementById('desiredLocation');
            desiredLocation.value = data.city + ", " + data.country;
        });
    
userForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulated suggestion based on user's provided information
    const currentLocation = document.getElementById('currentLocation').value;
    const fromLocation = document.getElementById('fromLocation').value;
    const desiredLocation = document.getElementById('desiredLocation').value;
    const familyLocation = document.getElementById('familyLocation').value;
    const favDestinationInput = document.getElementById('favDestination');
    const travelExperienceInput = document.getElementById('travelExperience');
    const pictureInput = document.getElementById('picture');
    const userPicture = document.getElementById('userPicture');




pictureInput.addEventListener('change', function () {
    if (pictureInput.files && pictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            userPicture.src = e.target.result;
        };
        reader.readAsDataURL(pictureInput.files[0]);
    }
});



    // Replace this with your actual logic to suggest destinations based on user data
    const suggestedDestination = `How about visiting ${desiredLocation}? It's a beautiful place to explore. Enjoy your trip as a ${selectedGender}.`;

        // Display the suggestion
        suggestion.textContent = suggestedDestination;
    });


const portfolioContainer = document.getElementById('portfolio');

function displayPortfolios() {
    portfolios.forEach((portfolio) => {
        const portfolioSection = document.createElement('div');
        portfolioSection.className = 'portfolio-section';
        const portfolioTitle = document.createElement('h2');
        portfolioTitle.textContent = portfolio.name;
        portfolioSection.appendChild(portfolioTitle);

        portfolio.investments.forEach((investment) => {
            const totalValue = investment.shares * investment.price;
            const investmentCard = document.createElement('div');
            investmentCard.className = 'investment-card';
            const logoImage = document.createElement('img');
            logoImage.className = 'logo';
            logoImage.src = brandLogos[investment.symbol];
            logoImage.alt = `${investment.symbol} Logo`;

            const stockSymbol = document.createElement('p');
            stockSymbol.innerHTML = `<strong>Stock Symbol:</strong> ${investment.symbol}`;

            const shares = document.createElement('p');
            shares.innerHTML = `<strong>Shares:</strong> ${investment.shares}`;

            const pricePerShare = document.createElement('p');
            pricePerShare.innerHTML = `<strong>Price per Share:</strong> $${investment.price}`;

            const totalValueParagraph = document.createElement('p');
            totalValueParagraph.innerHTML = `<strong>Total Value:</strong> $${totalValue}`;

            investmentCard.appendChild(logoImage);
            investmentCard.appendChild(stockSymbol);
            investmentCard.appendChild(shares);
            investmentCard.appendChild(pricePerShare);
            investmentCard.appendChild(totalValueParagraph);
            portfolioSection.appendChild(investmentCard);
        });

        portfolioContainer.appendChild(portfolioSection);
    });
}
});

