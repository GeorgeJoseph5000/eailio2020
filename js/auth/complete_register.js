
auth.onAuthStateChanged(user => {
    if (user) {
        db.collection("users").doc(user.uid).get().then(doc =>{
            if(doc.exists){
                window.location = "profile.php";
                return;
            }else{
                completeRegisteration.style.display = "block";
            }
        });
        completeRegisteration.addEventListener("submit", (e)=>{
            e.preventDefault();
            const first = completeRegisteration['first'].value;
            const last = completeRegisteration['last'].value;
            const country = completeRegisteration['country'].value;
            const city = completeRegisteration['city'].value;
            const gender = completeRegisteration['gender'].value;
            const work = completeRegisteration['work'].value;
            if(first == "" || last == "" || country == "" || city == "" || work == ""){
                addError("Fill out all fields");
                return;
            }
            
            db.collection("users").doc(user.uid).set({
                first: first,
                last: last,
                country: country,
                city: city,
                gender: gender,
                work: work,
                avatar:""
                
            }).catch(err =>{
                console.log(err);
                return;
            }).then(()=>{
                window.location = "profile.php";
            });
        });
    }else{
        
    }


});