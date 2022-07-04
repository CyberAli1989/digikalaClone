<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="node_modules/boxicons/css/boxicons.min.css">
    <link rel="stylesheet" href="node_modules/owl.carousel/dist/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="node_modules/owl.carousel/dist/assets/owl.theme.green.min.css">
    <link rel="stylesheet" href="node_modules/xzoom/dist/xzoom.min.css">
    <link rel="stylesheet" href="assets/css/index.css">


    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/boxicons/dist/boxicons.js"></script>
    <script src="node_modules/owl.carousel/dist/owl.carousel.min.js"></script>
    <script src="node_modules/xzoom/dist/xzoom.min.js"></script>
    <script src="assets/js/mobileNav.js"></script>
    <script src="assets/js/modals.js"></script>
    <script src="assets/js/desktopnav.js"></script>
    <script src="assets/js/slider.js"></script>
    <title>فروشگاه اینترنتی دیجی کالا</title>
    <link rel="shortcut icon" href="assets/imgs/footerLogo.png" type="image/x-icon">

</head>
<body>
<?php include ('nav.php')?>

    <div class="product">
        <img class="xzoom" src="assets/imgs/product2.jpg" xoriginal="assets/imgs/product2.jpg" />

        <div class="xzoom-thumbs">
            <a href="assets/imgs/product2.jpg">
                <img class="xzoom-gallery" width="80" src="assets/imgs/product3.jpg"  xpreview="assets/imgs/product3.jpg">
            </a>
            <a href="assets/imgs/product3.jpg">
                <img class="xzoom-gallery" width="80" src="assets/imgs/product1.jpg">
            </a>

        </div>
    </div>

<?php include ('footer.php')?>

<script>
    $(function () {
        $(".product .xzoom, .xzoom-gallery").xzoom({

        });
    });
</script>
</body>
</html>