<?php $title = "Login"; include("inc/header.inc.php"); ?>


<div class="row">
    <div class="col-md-6">
        <h1>Login</h1>
        <form method="POST" id="loginForm">
            <input type="text" class="form-control" name="email" placeholder="Email"/><br/>
            <input type="password" class="form-control" name="password" placeholder="Password"/><br/>
            <input type="submit" name="submit" class="btn btn-primary" />
        </form><br/>
    </div>
    <div class="col-md-6">
        <img src="https://www.wellesley.edu/sites/default/files/styles/news_refresh_hero/public/assets/dailyshot/online_friends_copy.jpg?itok=Y8U_1fnu" style="width: 100%;" />
</div><br>
<?php error_reporting(0); if($_GET['r']=="notlogged"){ ?>
<div id="errorField" class="alert alert-danger">You should login first.</div><br/>
<?php } ?>
</div>
<?php  include("inc/footer.inc.php"); include_js("js/auth/login.js"); ?>