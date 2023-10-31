function submitForm() {
            
            document.getElementById("Message").style.display = "block";
            document.getElementById("currentLocation").value = "";
            document.getElementById("desiredLocation").value = "";
            document.getElementById("currentResidence").value = "";            
            document.getElementById("hobbies").value = "";
            document.getElementById("languages").value = "";
            document.getElementById("skills").value = "";
            document.getElementById("education").value = "";
            document.getElementById("interests").value = "";
            document.getElementById("picture").value = "";
            document.getElementById("resume").value = "";
            document.getElementById("showFacts").value = "";
            userPicture.src = URL.createObjectURL(document.getElementById("picture").files[0]);
            downloadResume.href = URL.createObjectURL(document.getElementById("resume").files[0]);



        }
const showFactsCheckbox = document.getElementById("showFacts");
const additionalFactsDiv = document.getElementById("additionalFacts");

showFactsCheckbox.addEventListener("change", function () {
    if (showFactsCheckbox.checked) {
        additionalFactsDiv.style.display = "block";
    } else {
        additionalFactsDiv.style.display = "none";
    }
});
    
