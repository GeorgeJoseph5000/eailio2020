const friendPanel = document.getElementById("friendsPanel");
const container = document.querySelector("#container");
var loading = null;
var currentLimit = 0;
var incLimit = 4;
var oldDocs = {size: -1};
var finished = false;
var currentUser = null;

var loadedDocsId = [];

function addFriend(){
    if(loading == null && !finished){
        loading = addLoading();
        container.appendChild(loading);
        currentLimit += incLimit;
    }else{
        return;
    }
    auth.onAuthStateChanged(user => {
        if(user){
            currentUser = user;
            db.collection("users").doc(user.uid).get().then((userData) => {
                if(userData.exists){
                    db.collection("users").limit(currentLimit).get().then(docs=>{
                        if (oldDocs.size == docs.size) {
                            finished = true;
                            return;
                        }else{
                            oldDocs = docs;
                        }
                        docs.forEach((doc)=>{
                            if(doc.id != user.uid && !loadedDocsId.includes(doc.id)){
                                var avatar = "";
                                if(doc.data().avatar == ""){
                                    avatar = "images/default_pic.jpg";
                                }else{
                                    avatar = doc.data().avatar;
                                }
                                db.collection("friend_requests").where("from", "==", currentUser.uid).where("to", "==", doc.id).limit(1).get().then((request)=>{
                                    friendPanel.innerHTML += createRow(avatar, doc.data().first, "Online", doc.id, request.size == 0);
                                }).then(()=>{
                                    loadedDocsId.push(doc.id);
                                });
                            }
                        });

                    }).then(()=>{
                        loading.parentElement.removeChild(loading);
                        loading =  null;
                    });
                }
            });
        }
    });
}


var fitToHeight = setInterval(() => {
    if(container.offsetHeight < $(window).height()){
        addFriend();
    }else{
        clearInterval(fitToHeight);
    }
}, 100);



$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
        addFriend();
    }
 });




function addLoading() {
    var loading = document.createElement("div");
    loading.className = "row";
    loading.innerHTML = `<div style="margin: auto;"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div></div></div>`;
    return loading;
}


function createRow(imgHref, name, available, uid, checkRequest) {
    var button = "";
    if(checkRequest){
        button = `<button class="btn btn-primary" id="${uid}" onclick="request('${uid}')">Request</button>`;
    }else{
        //button = `<button class="btn btn-success" disabled>Requested</button>`;
        return " ";
    }
    

     return `
     <div class="col-md-6">
        <div id="friendRow" class="friendRow row">
            <div><img  width="50" src="${imgHref}" ></div>
            <div>${name}</div>
            <div>${available}</div>
            <div>${button}</div>
        </div>
    </div>`;
 }


function request(toID) {
    db.collection("friend_requests").where("from", "==", currentUser.uid).where("to", "==", toID).limit(1).get().then((doc)=>{
        if(doc.size == 0){
            db.collection("friend_requests").add({
                from: currentUser.uid,
                to: toID,
                seen: false
            });
        }
    }).then(()=>{
        var btnDOM = document.getElementById(toID);
        btnDOM.className = "btn btn-success";
        btnDOM.disabled = true;
        btnDOM.removeAttribute("onclick");
        btnDOM.textContent = "Requested";
    });
    
}