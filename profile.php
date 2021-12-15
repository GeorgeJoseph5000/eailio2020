<?php $title = "Profile"; include("inc/header.inc.php"); ?>
<div id="profContainer" style="display: none;">
    <div class="row">
        
        <div class="col-md-4"></div>
        <div class="col-md-4" id="imgCont">
            <div class="row">
                <div style="margin: auto;" class="c">
                    <img src="" id="avatar" alt="Avatar" class="image">
                    <div class="overlay">
                        <div class="row">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addProfPicModal" style="margin: auto;">
                        Change Image</button>
                            <button type="button" style="margin: auto;" class="btn btn-primary" onclick="removeProfilePic()">Remove Image</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4" ></div>
    </div><br>
    <div class="row" style="display: none;" id="main">
        <div class="col-md-3" id="mainInfo"></div>
        <div class="col-md-9" id="posts"></div>
    </div>
    <div class="row" style="display: none;" id="main">
        <div class="col-md-3" id="friends"></div>
    </div>
</div>



<div class="modal fade" id="addProfPicModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div id="modal-content" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Change Profile Picture</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="POST" id="proPicForm">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-5">Upload your photo here.</div>
                        <div class="col-md-6"><input type="file" id="profilePic" accept="image/*"/></div>
                    </div>
                    <br>
                    <div id="errorField" style="display: none;"></div><br/>
                    <div class="progress">
                        <div id="proPicProgresBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <input type="submit" class="btn btn-primary" value="Upload" />
                </div>
            </form>
        </div>
    </div>
</div>
<?php  include("inc/footer.inc.php"); ?>
<script src="js/auth/user.js"></script>
<script src="js/auth/userPages/profile.js"></script>





