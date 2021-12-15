registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = registerForm['email'].value;
    const password = registerForm['password'].value;
    
    
    onlyNowRegistered = true;
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
    }).catch(err =>{
        addError(err);
    });
});