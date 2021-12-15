<?php $title = "Register"; include("inc/header.inc.php"); ?>


<div class="row">
    <div class="col-md-6">
        <h1>Register</h1><br/>
        <form method="POST" id="registerForm">
            <input type="text" class="form-control" id="email" placeholder="Email" /><br/>
            <input type="password" class="form-control" placeholder="Password" id="password" /><br/>
            <input type="submit" value="Register" class="btn btn-primary"/>
        </form>
    </div>
    <div class="col-md-6">
        <img src="https://www.wellesley.edu/sites/default/files/styles/news_refresh_hero/public/assets/dailyshot/online_friends_copy.jpg?itok=Y8U_1fnu" style="width: 100%;" />
    </div>
</div><br/>
<div id="errorField" style="display: none;"></div><br/>


<?php  include("inc/footer.inc.php"); include_js("js/auth/register.js"); ?>

