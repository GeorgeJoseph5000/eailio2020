userPage = true;

auth.onAuthStateChanged(user => {
    if(!user){
        if(userPage){
            window.location = "login.php?r=notlogged";
        }
    }
});