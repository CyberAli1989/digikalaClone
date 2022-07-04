<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="node_modules/boxicons/css/boxicons.min.css">
    <link rel="stylesheet" href="node_modules/owl.carousel/dist/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="node_modules/owl.carousel/dist/assets/owl.theme.green.min.css">
    <link rel="stylesheet" href="assets/css/index.css">

    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/boxicons/dist/boxicons.js"></script>
    <script src="node_modules/owl.carousel/dist/owl.carousel.min.js"></script>
    <script src="assets/js/mobileNav.js"></script>
    <script src="assets/js/modals.js"></script>
    <script src="assets/js/desktopnav.js"></script>
    <script src="assets/js/slider.js"></script>
    <script src="assets/js/checkout.js"></script>
    <title>فروشگاه اینترنتی دیجی کالا</title>
    <link rel="shortcut icon" href="assets/imgs/footerLogo.png" type="image/x-icon">

</head>

<body>
<div class="blur"></div>
<?php include ('nav.php')?>
<div id="checkout">
    <div class="container">
        <div class="check-nav">
            <ul>
                <li class="active"><a href="#now">سبد خرید</a></li>
                <li><a href="#next">خرید بعدی</a></li>
            </ul>
        </div>
        <div class="hr"></div>
        <div id="now" class="basket">
            <div class="main">
                <div class="img">
                    <img src="assets/imgs/empty-cart.svg" alt="">
                </div>
                <div class="desc">
                    <h2>سبد خرید شما خالی است !</h2>
                    <p>میتوانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</p>
                    <div class="link">
                        <a href="#">تخفیف ها و پیشنهاد ها</a>
                        <a href="#">محصولات پرفروش روز</a>
                    </div>
                </div>
            </div>
            <div class="side">
                <a href="login.html">
                    <div class="login-into">
                        <div class="head">
                            <p><i class="bx bx-log-in bx-rotate-180"></i>وارد حساب کاربری شوید</p>
                            <p>></p>
                        </div>
                        <div class="desc">
                            <p>
                                برای مشاهده محصولاتی که پیش تر به سبد خرید خود اضافه کردید وارد شوید.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div id="next" class="basket">
            <div class="main">
                <div class="img">
                    <img src="assets/imgs/empty-sfl.png" alt="">
                </div>
                <div class="desc">
                    <h2>سبد خرید شما خالی است !</h2>
                    <p>میتوانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</p>
                    <div class="link">
                        <a href="#">تخفیف ها و پیشنهاد ها</a>
                        <a href="#">محصولات پرفروش روز</a>
                    </div>
                </div>
            </div>
            <div class="side">
                <a href="login.html">
                    <div class="login-into">
                        <div class="head">
                            <p><i class="bx bx-log-in bx-rotate-180"></i>وارد حساب کاربری شوید</p>
                            <p>></p>
                        </div>
                        <div class="desc">
                            <p>
                                برای مشاهده محصولاتی که پیش تر به سبد خرید خود اضافه کردید وارد شوید.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    </div>
</div>

<?php include ('footer.php')?>
</body>

</html>