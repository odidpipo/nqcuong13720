function leadSubmitedSuccessfuly() {
    $('.contact-modal').modal('hide');

    Swal.fire({
        icon: 'success',
        title: 'Đã nhận được thông tin của bạn',
        text: 'Chúng tôi sẽ phản hồi sớm nhất có thể',
        confirmButtonText: 'Đóng',
        iconColor: "#CF9847",
        confirmButtonColor: '#CF9847',
    });
}

function headerInitialize() {
    // header
    const navbarMenu = document.getElementById("navbar");
    const headerMenu = document.getElementById("header");
    const burgerMenu = document.getElementById("burger");
    const overlayMenu = document.querySelector(".header-overlay");
    const menuLink = $("#menu .menu-item .menu-link");

    // Show and Hide Navbar Function
    const toggleMenu = () => {
        navbarMenu.classList.toggle("active");
        overlayMenu.classList.toggle("active");
        burgerMenu.classList.toggle("active");
    };

    // Hide menu
    const hideMenu = () => {
        navbarMenu.classList.remove("active");
        overlayMenu.classList.remove("active");
        burgerMenu.classList.remove("active");
    };

    // Collapsible Mobile Submenu Function
    const collapseSubMenu = () => {
        navbarMenu
            .querySelector(".menu-dropdown.active .submenu")
            .removeAttribute("style");
        navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
    };

    // Toggle Mobile Submenu Function
    const toggleSubMenu = (e) => {
        if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
            e.preventDefault();
            const menuDropdown = e.target.parentElement;

            // If Dropdown is Expanded, then Collapse It
            if (menuDropdown.classList.contains("active")) {
                collapseSubMenu();
            } else {
                // Collapse Existing Expanded Dropdown
                if (navbarMenu.querySelector(".menu-dropdown.active")) {
                    collapseSubMenu();
                }

                // Expanded the New Dropdown
                menuDropdown.classList.add("active");
                const subMenu = menuDropdown.querySelector(".submenu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
    };

    // Fixed Resize Window Function
    const resizeWindow = () => {
        if (window.innerWidth > 992) {
            if (navbarMenu.classList.contains("active")) {
                toggleMenu();
            }
            if (navbarMenu.querySelector(".menu-dropdown.active")) {
                collapseSubMenu();
            }
        }
    };

    //Scroll function
    const scrollDown = () => {
        var isStickymenu = document.getElementById('isStickyMenu');
        if (document.documentElement.scrollTop > 70 && isStickymenu == null) {
            hideMenu();
        }
        if (document.documentElement.scrollTop > 40 && isStickymenu != null) {
            headerMenu.style.top = "0px";
        }

        if (document.documentElement.scrollTop <= 40 && isStickymenu != null) {
            headerMenu.style.top = "40px";
        }
    };

    

    // Initialize Event Listeners
    burgerMenu.addEventListener("click", toggleMenu);
    overlayMenu.addEventListener("click", toggleMenu);
    navbarMenu.addEventListener("click", toggleSubMenu);
    window.addEventListener("resize", resizeWindow);
    window.addEventListener("scroll", scrollDown);
    menuLink.on("click", toggleMenu);
}

function pageInitialize() {
    // remove preloading
    const preloadingDiv = document.querySelector('.preloading');
    if (preloadingDiv?.parentNode?.nodeName === "BODY") {
        try {
            preloadingDiv.parentNode.removeChild(preloadingDiv);
        } catch (e) {

        }
    }

    lightbox.option({
        'albumLabel': "",
        'disableScrolling': true,
        'alwaysShowNavOnTouchDevices': true,
        'resizeDuration': 300,
        'positionFromTop': 150
    })


    //end header
    var isAutoplay = true;
    new WOW().init();

    var homeSlide = $(".home-owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        loop: true,
        autoplay: isAutoplay,
        dots: true,
        autoplaySpeed: 500,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        smartSpeed: 500,
        slideTransition: "ease-out",
    });

    let activedTitem = $(".home-owl-carousel").find(".owl-item.active");

    setContentAnimationForHomeslide(activedTitem);

    homeSlide.on('translated.owl.carousel', function (event) {

        let notActiveTitem = $(".home-owl-carousel").find(".owl-item");

        let activedTitem = $(".home-owl-carousel").find(".owl-item.active");

        removeContentAnimationForHomeslide(notActiveTitem);

        setContentAnimationForHomeslide(activedTitem)

    });

    function removeContentAnimationForHomeslide(notActiveTitem) {
        notActiveTitem.find(".logo").each(function (i, obj) {

            $(this).removeClass('fadeInRight animated')
        });
        notActiveTitem.find(".title").each(function (i, obj) {

            $(this).removeClass('fadeInDown animated')
        });
        notActiveTitem.find(".text").each(function (i, obj) {

            $(this).removeClass('fadeInUp animated')
        });
        notActiveTitem.find(".btn").each(function (i, obj) {

            $(this).removeClass('fadeInUp animated')
        });
    }

    function setContentAnimationForHomeslide(activedTitem) {
        activedTitem.find(".logo").addClass('fadeInRight animated  ')

        activedTitem.find(".title").addClass('fadeInDown animated')

        activedTitem.find(".text").addClass('fadeInUp animated')

        activedTitem.find(".btn").addClass('fadeInUp animated')
    }


    $(".achievement-section-owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 0,
        autoplay: isAutoplay,
        dots: false,
        autoplayTimeout: 3000,
        autoplaySpeed: 500,
        autoplayHoverPause: true,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                autoplay: isAutoplay,
                loop: true,
            },
            500: {
                items: 2,
                autoplay: isAutoplay,
                loop: true,
            },
            800: {
                items: 4,
            }
        }
    });

    $(".review-section-owl-carousel").owlCarousel({
        dots: true,
        items: 3,
        loop: true,
        autoplay: isAutoplay,
        autoplayTimeout: 5000,
        autoplaySpeed: 500,
        autoplayHoverPause: true,
        autoWidth: true,
        margin: 40,
        smartSpeed: 500,
        slideTransition: "ease-in-out",
        responsive: {
            0: {
                autoWidth: false,
                items: 1,
            },

            1000: {
                autoWidth: true,
                items: 3,
            }
        }
    });


    $(".posts-section-owl-carousel").owlCarousel({
        dots: true,
        items: 4,
        loop: true,
        autoplay: isAutoplay,
        autoplayTimeout: 5000,
        autoplaySpeed: 500,
        autoplayHoverPause: true,
        autoWidth: true,
        margin: 24,
        smartSpeed: 500,
        slideTransition: "ease-in-out",
        responsive: {
            0: {
                autoWidth: false,
                items: 1,
            },
            1000: {
                autoWidth: true,
                items: 3,
            },
            1400: {
                autoWidth: true,
                items: 4,
            }
        }
    });

    // var scrollTop = $(".scroll-top");
    // var scrollTopButton = $(".scroll-top-button");
    // window.onscroll = function () {

    //     if (window.scrollY > 100) {
    //         scrollTop.show();
    //     } else {
    //         scrollTop.hide();
    //     }
    // };

    // scrollTopButton.click(() => {
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //     });
    // });

}

function scrollToId(id) {
    $([document.documentElement, document.body]).animate({ scrollTop: $(id).offset().top - 90 }, 500);
}