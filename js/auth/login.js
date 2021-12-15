
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;
    
    if(email == "" || password == ""){
        addError("Fill all fields first.");
        return;
    }

    auth.signInWithEmailAndPassword(email, password).then(() =>{
        window.location = "profile.php";
    }).catch(err =>{
        addError(err);
    });
});
