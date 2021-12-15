<?php include("js.inc.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title><?php echo $title ? $title : ""; ?> - EAILIO2020</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css" />
    <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-functions.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-storage.js"></script>
    <script src="js/libraries/firebase.js"></script>
    <script src="js/libraries/helper.js"></script>
<meta name="theme-color" content="#8d003d" />
</head>
<body id="body">
    <nav class="navbar navbar-expand-lg navbar-dark  fixed-top" id="navBar">
        <a class="navbar-brand" href="index.php">EAILIO2020</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> 
        </button>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto" id="navBarLeft">
            </ul>
            <ul class="navbar-nav ml-auto" id="navBarRight">
            </ul>
        </div>
    </nav>

<div id="container" class="container">