const navBarMain = document.querySelector("#navbarSupportedContent");
const navBarLeft = document.querySelector("#navBarLeft");
const navBarRight = document.querySelector("#navBarRight");
const navBar = document.querySelector("#navBar");


const nav_footer = document.querySelector("#nav_footer");

var currentUser = null;


const completeRegisteration = document.querySelector("#completeRegisteration");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");



let rightLink1 = "";
let rightLink2 = "";


auth.onAuthStateChanged(user => {
    if(user){
        if(user.emailVerified){
            currentUser = user;
            db.collection("users").doc(user.uid).get().then(doc=>{
            if(doc.exists){
                if(registerForm != null || loginForm != null){
                    window.location =  "profile.php";
                    return;
                }
                changeToUserLinks(doc.data().first);
            }else{
                if(completeRegisteration == null){
                    window.location = "complete_register.php";
                }
                changeToUserLinks("");
            }
            });
        }else{
            if(!activation){
                if(onlyNowRegistered){
                    auth.currentUser.sendEmailVerification();
                    window.location = "activation.php?r=success";
                    onlyNowRegistered = false;
                }else{
                    window.location = "activation.php?r=error";
                }
                
            }
            
            
            changeToUserLinks("");
        }
        
    }else{
        changeToNormalLinks();
    }
});

function changeToNormalLinks() {
    changeRightLinkDynamically("",false);
    var leftNavContent = "";
    var dropdownLinksArray2= [addDropdownLink("../main", "Portfolio"),addDropdownLink("../templates", "HTML Templates"),'<div class="dropdown-divider"></div>',addDropdownLink("../eailio", "Eailio"),addDropdownLink("../exams", "Exams"),'<div class="dropdown-divider"></div>',addDropdownLink("index.php", "Eailio 2020"),addDropdownLink("../challengemananger/", "Challenge Manager"),'<div class="dropdown-divider"></div>',addDropdownLink("../main/android.php", "Focus"),addDropdownLink("../main/flutter.php", "CloneGram")];
    var dropdown2 = addDropDown("Products", dropdownLinksArray2);
    
    leftNavContent += dropdown2;
    navBarLeft.innerHTML = leftNavContent;
}

var fulled = false;

function changeToUserLinks(fn) {
    changeRightLinkDynamically(fn, true);
    var leftNavContent = "";
    var dropdownLinksArray = [addDropdownLink("profile.php", "Profile"),addDropdownLink("#", "Account Settings"),addDropdownLink("find_friends.php", "Find Friends")];
    var dropdown = addDropDown("Account", dropdownLinksArray);
    var dropdownLinksArray2= [addDropdownLink("../main", "Portfolio"),addDropdownLink("../templates", "HTML Templates"),'<div class="dropdown-divider"></div>',addDropdownLink("../eailio", "Eailio"),addDropdownLink("../exams", "Exams"),'<div class="dropdown-divider"></div>',addDropdownLink("index.php", "Eailio 2020"),addDropdownLink("../challengemananger/", "Challenge Manager"),'<div class="dropdown-divider"></div>',addDropdownLink("../main/android.php", "Focus"),addDropdownLink("../main/flutter.php", "CloneGram")];
    var dropdown2 = addDropDown("Products", dropdownLinksArray2);
    

    leftNavContent += dropdown2;
    leftNavContent += dropdown;
    
    leftNavContent += addFriendsLink("friend_requests.php","friends");
    db.collection("friend_requests").where("to", "==", currentUser.uid).where("seen", "==", false).get().then((doc)=>{
        if(doc.size > 0){
            addFriendTransition();
        }
    });
    
    navBarLeft.innerHTML = leftNavContent;
    
}

function addFriendTransition() {
    var friends = document.getElementById("friends");
    if(friends == null){
        setInterval(() => {
            if(friends != null){
                clearInterval();
            }
            friends = document.getElementById("friends");
        }, 100);
    }
    setInterval(() => {
        if (fulled) {
            fulled = false;
            friends.innerHTML = `
                <svg class="bi bi-people-fill" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>`;
            
        }else{
            fulled = true;
            friends.innerHTML = `
                <svg class="bi bi-people" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                </svg>`;
        }
    }, 500);
}

function addFulledFriendsLink(href, id) {
    if(id != ""){
        return `
        <li class="nav-item">
            <a class="nav-link" id="${id}" href="${href}">
                <svg class="bi bi-people-fill" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>
            </a>
        </li>`;
    }else{
        return `
        <li class="nav-item">
            <a class="nav-link" href="${href}">
                <svg class="bi bi-people-fill" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>
            </a>
        </li>`;
    }
}

function addFriendsLink(href, id) {
    if(id != ""){
        return `
        <li class="nav-item">
            <a class="nav-link" id="${id}" href="${href}">
                <svg class="bi bi-people" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                </svg>
            </a>
        </li>`;
    }else{
        return `
        <li class="nav-item">
            <a class="nav-link" href="${href}">
                <svg class="bi bi-people" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                </svg>
            </a>
        </li>`;
    }
}


function addLink(href, name, id) {
    if(id != ""){
        return `
        <li class="nav-item">
            <a class="nav-link" id="${id}" href="${href}">${name}</a>
        </li>`;
    }else{
        return `
        <li class="nav-item">
            <a class="nav-link" href="${href}">${name}</a>
        </li>`;
    }
    
}

function addDropDown(name, links) {
    var linksString = "";
    links.forEach(link => {
        linksString += link;
    });
    return `
    <li class="nav-item dropdown" >
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${name}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdown">
            ${linksString}
        </div>
    </li>`;
    
}

function addDropdownLink(href, name) {
    return `<a class="dropdown-item" id="dropdown-item" href="${href}">${name}</a>`;
}
function changeRightLinkDynamically(fn, loggedin) {
    var html = addLink("#","","") + addLink("#","","");
    navBarRight.innerHTML = html;

    rightLink1 = navBarRight.children[0].children[0];
    rightLink2 = navBarRight.children[1].children[0];

    if(loggedin){
        
        if(fn != ""){
            rightLink1.innerHTML = `${fn}'s Profile`;
        }else{
            rightLink1.innerHTML = "Profile";
        }
        rightLink2.innerHTML = "Logout";

        rightLink1.href = "profile.php";
        rightLink2.href = "#";
        rightLink2.addEventListener("click", signOut);
    }else{
        rightLink2.removeEventListener("click", signOut);

        rightLink1.innerHTML = "Register";
        rightLink2.innerHTML = "Log in";

        rightLink1.href = "register.php";
        rightLink2.href = "login.php";
    }
}

function signOut(e) {
    e.preventDefault(); 
    auth.signOut().then(() => {
        console.log("user signed out");
        window.location = "index.php";
    });
}