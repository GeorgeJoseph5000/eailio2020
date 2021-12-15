const addUser = document.getElementById("addUser");

addUser.addEventListener("submit", (e)=>{
    e.preventDefault();
    const first = addUser['first'].value;
    const last = addUser['last'].value;
    const country = addUser['country'].value;
    const city = addUser['city'].value;
    const gender = addUser['gender'].value;
    const work = addUser['work'].value;
    if(first == "" || last == "" || country == "" || city == "" || work == ""){
        addError("Fill out all fields");
        return;
    }
    
    db.collection("users").doc(first).set({
        first: first,
        last: last,
        country: country,
        city: city,
        gender: gender,
        work: work,
        avatar:"",
        friends: Array()
        
    }).catch(err =>{
        console.log(err);
        return;
    });
});
