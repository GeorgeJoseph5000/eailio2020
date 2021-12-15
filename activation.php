<?php $title = "Activation"; include("inc/header.inc.php"); ?>

<div id="errorField" style="display: none;"></div>

<script>activation = true;</script>
<?php if($_GET['r'] == "success"){ ?>
    <script>addSuccess("Go to your email and check it for verfication");signOutNormal();</script>
<?php }elseif($_GET['r'] == 'error') {  ?>
    <script>addError("Please verifiy your email before accessing the website");</script>
<?php }else{ header("Location: index.php"); }?>


<?php include("inc/footer.inc.php"); ?>