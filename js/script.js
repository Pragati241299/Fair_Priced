$(document).ready(function() {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
});
var checkoutList = document.getElementById("checkoutList");
var checkoutItems = checkoutList.getElementsByClassName("step-checkout_item");
for (var i = 0; i < checkoutItems.length; i++) {
    checkoutItems[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
paypalm.minicartk.render(); //use only unique class names other than paypal1.minicart1.Also Replace same class name in css and minicart.min.js

paypalm.minicartk.cart.on('checkout', function(evt) {
    var items = this.items(),
        len = items.length,
        total = 0,
        i;

    // Count the number of each item in the cart
    for (i = 0; i < len; i++) {
        total += items[i].get('quantity');
    }

    if (total < 3) {
        alert('The minimum order quantity is 3. Please add more to your shopping cart before checking out');
        evt.preventDefault();
    }
});
window.onload = function() {
    document.getElementById("password1").onchange = validatePassword;
    document.getElementById("password2").onchange = validatePassword;
}

function validatePassword() {
    var pass2 = document.getElementById("password2").value;
    var pass1 = document.getElementById("password1").value;
    if (pass1 != pass2)
        document.getElementById("password2").setCustomValidity("Passwords Don't Match");
    else
        document.getElementById("password2").setCustomValidity('');
    //empty string means no validation error
}
jQuery(document).ready(function($) {
    $(".scroll").click(function(event) {
        event.preventDefault();

        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});
$(document).ready(function() {
    /*
    var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear' 
    };
    */
    $().UItoTop({
        easingType: 'easeOutQuart'
    });

});
$(window).load(function() {
    $("#flexiselDemo1").flexisel({
        visibleItems: 3,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2
            },
            tablet: {
                changePoint: 768,
                visibleItems: 2
            }
        }
    });
});
addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}
var checkoutList = document.getElementById("checkoutList");
var checkoutItems = checkoutList.getElementsByClassName("step-checkout_item");
for (var i = 0; i < checkoutItems.length; i++) {
    checkoutItems[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}