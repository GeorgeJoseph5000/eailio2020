var userPage = false;
var onlyNowRegistered = false;
var activation = false;
function addError(msg) {
    const errorField = document.getElementById("errorField");
    errorField.className = "alert alert-danger";
    errorField.style.display = "block";
    errorField.textContent = msg;
}

function addSuccess(msg) {
    const errorField = document.getElementById("errorField");
    errorField.className = "alert alert-success";
    errorField.style.display = "block";
    errorField.textContent = msg;
}
function clearMessage() {
    const errorField = document.getElementById("errorField");
    errorField.className = "";
    errorField.style.display = "none";
    errorField.textContent = "";
}


function signOutNormal(){ 
    auth.signOut().then(() => {
        console.log("user signed out");
    });
}