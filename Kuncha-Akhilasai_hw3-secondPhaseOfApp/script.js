function submitForm() {
    // Get form values
    const currentLocation = document.getElementById("currentLocation").value;
    const desiredLocation = document.getElementById("desiredLocation").value;
    const currentResidence = document.getElementById("currentResidence").value;
    const hobbies = document.getElementById("hobbies").value;
    const languages = document.getElementById("languages").value;
    const skills = document.getElementById("skills").value;
    const education = document.getElementById("education").value;
    const interests = document.getElementById("interests").value;
    const placeOfBirth = document.getElementById("placeOfBirth").value;
    const userPicture = document.getElementById("userPicture");
    const downloadResume = document.getElementById("downloadResume");

    // Display user details
    userPicture.src = URL.createObjectURL(document.getElementById("picture").files[0]);
    downloadResume.href = URL.createObjectURL(document.getElementById("resume").files[0]);

    // Toggle additional facts display
    const showFacts = document.getElementById("showFacts");
    const additionalFacts = document.getElementById("additionalFacts");

    if (showFacts.checked) {
        additionalFacts.style.display = "block";
    } else {
        additionalFacts.style.display = "none";
    }

    // Handle form submission
    // You can send the form data to the server or perform any desired action here
    // For example, you can use AJAX to send data to the server.
}
