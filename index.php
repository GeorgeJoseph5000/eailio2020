<?php $title = "Home"; include("inc/header.inc.php"); ?>
<div style="width: 100%;background-image: url(https://aem.dropbox.com/cms/content/dam/dropbox/blog/files/2016/07/winfriendsillo1x.png);padding-bottom: 700px;" alt="">
<div class="row">


<div class="col-md-12">
<script>

auth.onAuthStateChanged(user => {
    if(!user){
        
    }else{
        document.getElementById("idhayw").innerHTML = `Hello<br/>
Would you like to go to the <a href="profile.php">Profile</a>`;
    }
});
</script>

    <div id="idhayw"></div>
    <div style="width: 100%;color: black;text-align: center;"><h1 style="width: 100%;color: black;text-align: center;">Find Online Friends in Our Social Website</h1>
    </div>
    
</div>
</div>


<div class="row">
    <div class="col-md-2">
    </div>
    <div class="col-md-3">
        <a href="register.php" style="text-shadow: black;box-shadow: black;font-size: 30px;margin-bottom:50px;" class="btn btn-danger">Register Now</a>
        <br>
    </div>
    <div class="col-md-2">
    </div>
    <div class="col-md-3">
        <a href="login.php" style="text-shadow: black;box-shadow: black;font-size: 30px;" class="btn btn-warning">Login Now</a>
        <br>
    </div>
    <div class="col-md-2">
    </div>
</div>



</div>




</div>
<?php include("inc/footer.inc.php"); ?>
