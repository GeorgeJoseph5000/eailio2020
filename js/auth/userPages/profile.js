const main = document.getElementById("main");
const mainInfo = document.getElementById("mainInfo");

const profContainer = document.getElementById("profContainer");

const profilePic = document.getElementById("profilePic");
const proPicForm = document.getElementById("proPicForm");
const proPicProgresBar = document.getElementById("proPicProgresBar");
var currentUser = null;

auth.onAuthStateChanged(user => {
    if(user){
        currentUser = user;
        db.collection("users").doc(user.uid).onSnapshot((doc) => {
            if(doc.exists){
                const avatar = document.getElementById("avatar");
                let dataStream = doc.data();
                if(dataStream.avatar == ""){
                    avatar.src = "images/default_pic.jpg";
                }else{
                    avatar.src = dataStream.avatar;
                }
                var array = [returnWidgetInfo("Name", dataStream.first+" "+dataStream.last), returnWidgetInfo("Country", dataStream.city+", "+dataStream.country), returnWidgetInfo("Gender", dataStream.gender), returnWidgetInfo("Work", dataStream.work)]; 
                var html = returnWidget("Main Info", array);
                main.style.display = "block";
                mainInfo.innerHTML = html;
                profContainer.style.display = "block";
                
            }
        });
    }
});

function returnWidget(header,details) {
    var dets = "";
    details.forEach(element => {
        dets += element;
    });
    return `
    <div class="widget">
        <div class="widget-header">
            ${header}
        </div>
        <div class="widget-body" id="mainInfo">
            ${dets}
        </div>
    </div>`;
}

function returnWidgetInfo(thing, detail) {
    return `<div class="widget-intro">${thing}:</div> <div class="widget-detail">${detail}</div><br>`;
}



proPicForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    var image = profilePic.files[0];
    

    var userStorageRef = storage.ref(currentUser.uid+"/profilePic")

    uploadFileToRef(userStorageRef,image);
});

function getExtension(filename) {
    return filename.split('.').pop();
}

function uploadFileToRef(userStorageRef,image) {
    addSuccess("Uploading...");
    var task = userStorageRef.put(image);

    task.on("state_changed", (snapshot)=>{
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
        console.log(percentage)
        proPicProgresBar.style.width = Math.floor(percentage).toString()+"%";
    },
    (err)=>{
        console.log(err);
    },()=>{
        addSuccess("Uploading Done. Wait a minute to configure database.")
        userStorageRef.getDownloadURL().then((url)=>{
            db.collection("users").doc(currentUser.uid).update({
                avatar: url
            }).then(()=>{
                filePath = "";
                profilePic.value = '';
                $('#addProfPicModal').modal('hide');
                proPicProgresBar.style.width = "0%";
                clearMessage();
            });
        });
        
    });
}

function removeProfilePic() {
    var userStorageRef = storage.ref(currentUser.uid+"/profilePic");
    userStorageRef.delete().then(function() {
        db.collection("users").doc(currentUser.uid).update({
            avatar: ""
        })
    }).catch((err)=>{
        db.collection("users").doc(currentUser.uid).update({
            avatar: ""
        })
    });
}