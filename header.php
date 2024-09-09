<?php
    $home = 'index.php';
    $about = 'about.php';
    $contact = 'contact.php';
    $services = 'services.php';
    $prices = 'prices.php';
    $team = 'team.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <!-- preloader -->
    <div class="preloader js-preloader">
        <div></div>
    </div>
    <!-- Page Wrapper Start -->
    <div class="page-wrapper">
        <div class="header js-header">
            <div class="container">
                <div class="logo">
                    <a href="#">tolmol<span>cleaning service</span></a>
                </div>
                <button type="button" class="nav-toggler js-nav-toggler">
                    <span></span>
                </button>
                <nav class="nav js-nav">
                    <ul>
                        <li class="js-nav-item"><a href="<?php echo $home; ?>">Home</a></li>
                        <li class="js-nav-item"><a href="<?php echo $about; ?>">About</a></li>
                        <li class="js-nav-item"><a href="<?php echo $services; ?>">Services</a></li>
                        <li class="js-nav-item"><a href="<?php echo $prices; ?>">Pricing</a></li>
                        <li class="js-nav-item"><a href="<?php echo $team; ?>">Team</a></li>
                        <li class="js-nav-item"><a href="<?php echo $contact; ?>">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>