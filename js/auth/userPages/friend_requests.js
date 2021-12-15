const friendRequests = document.getElementById("friendRequests");
const container = document.querySelector("#container");

var loading = null;
var currentLimit = 0;
var incLimit = 4;
var oldDocs = {size: -1};
var finished = false;
var currentUser = null;

var loadedDocsId = [];

function addFriendRequest() {
    
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
            db.collection("friend_requests").limit(currentLimit).get().then((friendRequestsDocs)=>{
                if (oldDocs.size == friendRequestsDocs.size) {
                    finished = true;
                    return;
                }else{
                    oldDocs = friendRequestsDocs;
                }
                friendRequestsDocs.forEach(friendRequest => {
                    if(!loadedDocsId.includes(friendRequest.id)){
                        db.collection("users").doc(friendRequest.data().from).get().then((userData)=>{
                            var avatar = "";
                            if(userData.data().avatar == ""){
                                avatar = "images/default_pic.jpg";
                            }else{
                                avatar = userData.data().avatar;
                            }
                            friendRequests.innerHTML += createRow(avatar, userData.data().first, "Online", friendRequest.id);
                            loadedDocsId.push(friendRequest.id);
                        }).then(()=>{
                            db.collection("friend_requests").doc(friendRequest.id).update({
                                seen: true
                            });
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

var fitToHeight = setInterval(() => {
    if(container.offsetHeight < $(window).height()){
        addFriendRequest();
    }else{
        clearInterval(fitToHeight);
    }
}, 100);

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
        addFriendRequest();
    }
 });

function addLoading() {
    var loading = document.createElement("div");
    loading.className = "row";
    loading.innerHTML = `<div style="margin: auto;"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div></div></div>`;
    return loading;
}


function createRow(imgHref, name, available, friendRequestID) {
    var button1 = `<button class="btn btn-primary" id="addFriend${friendRequestID}" onclick="addFriend('${friendRequestID}')">Add Friend</button>`;
    var button2 = `<button class="btn btn-danger" id="removeRequest${friendRequestID}" onclick="removeRequest('${friendRequestID}')">Remove Request</button>`;


     return `
     <div class="col-md-6" id="${friendRequestID}">
        <div id="friendRow" class="friendRow row">
            <div><img  width="50" src="${imgHref}" ></div>
            <div>${name}</div>
            <div>${available}</div>
            <div>${button1}</div>
            <div>${button2}</div>
        </div>
    </div>`;
 }

function addFriend(friendRequestID){
    db.collection("friend_requests").doc(friendRequestID).delete().then(()=>{
        db.collection("friend_requests").doc(friendRequestID).get().then((request)=>{
            var friends = [request.data().to, request.data().from];
            db.collection("friends").add({
                friendship: friends
            }).then(()=>{
                var btnAddFriend = document.getElementById("addFriend"+friendRequestID);
                btnAddFriend.removeAttribute("onclick");
                btnAddFriend.className = "btn btn-success";
                btnAddFriend.textContent = "Friend Added";
                btnAddFriend.disabled = true;
                var btnRemoveFriend = document.getElementById("removeRequest"+friendRequestID);
                btnRemoveFriend.textContent = "Unfriend";
                btnRemoveFriend.setAttribute("onclick",`unfriend('${request.data().from}','${friendRequestID}')`);
            });
        
        });
    });

}

function removeRequest(friendRequestID) {
    db.collection("friend_requests").doc(friendRequestID).delete().then(()=>{
        document.getElementById(friendRequestID).remove();
    });
    
}

function unfriend(fromID,friendRequestID) {
    var friends = [currentUser.uid, fromID];
    db.collection("friends").where("friendship","==",friends).limit(1).get().then((friendships)=>{
        if(friendships.size == 1){
            var friendShipId = null;
            friendships.forEach(friendship => {
                friendShipId = friendship.id;
            });
            db.collection("friends").doc(friendShipId).delete().then(()=>{
                document.getElementById(friendRequestID).remove();
            });
        }
    });
}

function removeItemFromArray(array,item) {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
}

//faqoexzjcsjkgyxfrp@ttirv.net
//morning rise
//limitless
//heaven
//sbdd_a