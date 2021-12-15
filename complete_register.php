<?php $title = "Complete Register"; include("inc/header.inc.php"); ?>

<div class="row">
    <div class="col-md-6">
        <form method="POST" id="completeRegisteration" style="display: none;">
            <h1>Complete Register</h1><br>
            <input type="text" class="form-control" placeholder="First Name" id="first" /><br/>
            <input type="text" class="form-control" placeholder="Last Name" id="last" /><br/>
            <input type="text" class="form-control" placeholder="City" id="city" /><br/>
            <input type="text" class="form-control" placeholder="Country" id="country" /><br/>
            <input type="text" class="form-control" placeholder="Work" id="work" /><br/>
            <select class="form-control" id="gender" >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select><br/>
            <input type="submit" class="btn btn-primary" value="Submit"/><br/>
        </form>
    </div>
</div>
<br>
<div id="errorField" style="display: none;"></div><br/>

<?php  include("inc/footer.inc.php"); include_js("js/auth/complete_register.js"); ?>