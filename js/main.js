/*! main.js | (c) brilliantbasics | brilliantbasics.com/license -*/
var _stickybanner = [];
var _defaultMobileSize = 600;
var isCompleteCall = false;
var bgColors = "redbg,protecting,investing,financing,support-red,white-gray,whitebg,advising";
var IsOverlayDisplay = false;


function setCookie(key, value) {
    var expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // For 1 yr
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function delete_cookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function SetHeroBackGround() {

    $(".abc-hero").each(function() {
        var hero = $(this);
        var imgMbUrl = hero.data("moburl");
        var imgUrl = hero.data("deskurl");
        if ($(window).width() <= 600) {
            hero.css("background", "url(" + imgMbUrl + ")");

        } else {
            hero.css("background", "url(" + imgUrl + ")");
        }
    })
}

function setMastBackGround() {

    var mastHead = $(".abc-menu-wrap");
    var ishero = $(".hero-a-banner").length > 0 || $(".hero_b_banner").length > 0;
    if (ishero != true) {
        var mastHeadNext = $(".abc-menu-wrap").next();

        if (mastHeadNext.hasClass("bodyBg")) {
            mastHead = $(".bodywrapper");
        }

        var colors = bgColors.split(',');
        $(colors).each(function(i, d) {
            if (mastHeadNext.hasClass(d)) {
                mastHead.addClass(d);
            }
        })
    }


}



$(window).resize(function() {
    SetHeroBackGround();
});

function fnMastHeadFunctions() {

    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event) {
        fnShowOverlay(true);
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });


    function fnShowOverlay(isEnabled) {
        var width = $(window).width();
        var IsTab = (width >= 601 && width <= 800);
        var AllSmallDevices = (width <= 800);
        //$(".menu-icon").toggleClass("open");
        if (isEnabled) {
            if ($(".bodywrapper").hasClass("over_scroll")) {
                $(".bodywrapper").removeClass("over_scroll");
            } else {
                $(".bodywrapper").addClass("over_scroll");
            }
            //$(".cust-log-ico").toggleClass("no-display");
            if (IsTab) {
                // $('.logo').toggleClass("no-display");
                $('.overlay').toggleClass("display_blk");
                setTimeout(function() {
                    $(".overlay").toggleClass("over_fade");
                }, 1);
                IsOverlayDisplay = $('.overlay').hasClass("display_blk");
            }


        }

        if (!AllSmallDevices) {
            $(".bodywrapper").removeClass("over_scroll");
            $('.overlay').removeClass("display_blk");
            $('.logo').removeClass("no-display");
        }


        setTimeout(function() {
            width = $(window).width();
            IsTab = (width >= 601 && width <= 800);
            AllSmallDevices = (width <= 800);

            var isData = !($(".side-collapse").hasClass("in"));

            if (IsTab && !isEnabled) {
                if (isData) {
                    $('.logo').addClass("no-display");
                    $('.overlay').addClass("display_blk");
                    $(".bodywrapper").addClass("over_scroll");
                }
            }

        }, 100)


        if (!isEnabled && $("#bs-example-navbar-collapse").hasClass("in")) {
            $(".icon-icon-close").click();
        }


    }
    //menu mobile open close

    $(".menu-icon").click(function() {
        var width = $(window).width();
        $(".menu-icon").toggleClass("open");
        $(".mob_hidden_icon").toggleClass("no-display");
        $(".dropbtn").toggleClass("no-display");
        $(".cust-log-ico").toggleClass("no-display");
        if (width >= 601 && width <= 800) {
            $('.logo').toggleClass("no-display");

        }

    });



    $(".mob_nav a").click(function() {
        $("#bs-example-navbar-collapse").toggleClass("in");
        $(".subnav-custom").toggleClass("click_mob");
        $(".lob_collapse").addClass("no-display");
        $(".lob_expand").toggleClass("block-display");
        $(".click_mob .custom-navbar-subnav").addClass("ht_100");
        SetFixedPosition(this, "nav");
        fnShowOverlay(true);
        setTimeout(function() {
            $(".subnav-custom").toggleClass("over_fade");
        }, 20);
    });

    $(".icon-icon-close").click(function() {
        var isModalClose = $(this).hasClass("modalClose");
        if (isModalClose) {
            return;
        }
        $("#bs-example-navbar-collapse").removeClass("in");
        $(".subnav-custom").removeClass("click_mob");
        $(".subnav-custom").removeClass("over_fade");
        $(".lob_expand").removeClass("block-display");
        $(".lob_collapse").removeClass("no-display");
        $(".subnav-custom .navbar-default").removeClass("ht_100");
        SetFixedPosition(this, "nav");
        fnShowOverlay(true);
    });


    $(".nav-item .abc_mb_2nd").click(function() {
        var parentNav = $(this).closest("nav");

        if (parentNav.length <= 0) {
            return;
        }
        var width = $(window).width();
        if (width >= 320 && width <= 800) {

            if ($(parentNav).hasClass("ht_100")) {
                $(parentNav).removeClass("ht_100");
            } else {
                $(parentNav).addClass("ht_100");
            }

            if (parentNav.height() <= $(window).height()) {
                $(parentNav).addClass("ht_100");
            }
        }
    });

    function SetFixedPosition(obj, destion) {
        var parentNav = $(obj).closest(destion);

        if (parentNav.length <= 0) {
            return;
        }

        if ($(parentNav).hasClass("menu_fix_top")) {
            $(parentNav).removeClass("menu_fix_top");
        } else {
            $(parentNav).addClass("menu_fix_top");
        }
        // new added
        if ($(parentNav).hasClass("submenu_fix")) {
            $(parentNav).removeClass("submenu_fix");
        } else {
            $(parentNav).addClass("submenu_fix");
        }
    }



    function fnSetMastLayout() {
        var width = $(window).width();
        if (width >= 801) {
            $('.mast_head').removeClass('container-fluid').addClass('container');
        } else if (width >= 320 && width <= 800) {
            $('.mast_head').removeClass('container').addClass('container-fluid');
        }
    }

    fnSetMastLayout();

    $(window).resize(function() {
        fnShowOverlay(false);
        fnSetMastLayout();
    });

    $(".overlay").click(function() {
        fnCloseOpenMenus();
    });

    $(window).on("orientationchange", function() {
        fnCloseOpenMenus();
    });

    function fnCloseOpenMenus() {

        var width = $(window).width();
        var AllSmallDevices = (width <= 800);

        if (AllSmallDevices) {
            var isMenuOpen = !($(".side-collapse").hasClass("in"));
            if (isMenuOpen) {
                sideslider.click();
            }

            isMenuOpen = $("#bs-example-navbar-collapse").hasClass("in");
            if (isMenuOpen) {
                $(".icon-icon-close").click();
            }
        }

        $(".bodywrapper").removeClass("over_scroll");
        $('.overlay').removeClass("display_blk");
        $('.logo').removeClass("no-display");
    }
}


$(document).ready(function() {

    //remove
    var strIndex = window.location.href.lastIndexOf('/');
    var lastIndex = window.location.href.length
    if (lastIndex - 1 > strIndex) {
        var page = window.location.href.substr(strIndex + 1, lastIndex).toLowerCase()

        if (page == "corporate") {
            if ($(".hero-a-banner.abc-hero").length > 0) {
                $(".hero-a-banner.abc-hero").css("min-height", "785px")
            }

        }
    }

    // $('select').niceSelect();

    $(".content-1").mCustomScrollbar({
        theme: "minimal"
    });
    //Menu fixed- absolute for Hero A & Hero B
    var ishero;

    ishero = $(".hero-a-banner").length > 0 || $(".hero_b_banner").length > 0;

    if (ishero) {
        $(".abc-menu-wrap").addClass("fixed_menu");
    } else {
        $(".abc-menu-wrap").removeClass("fixed_menu");
    }

    SetHeroBackGround();
    setMastBackGround();


    ToggelSticky();

    $("[data-toggle=tooltip]").tooltip();

    fnMastHeadFunctions();
});


//Sticky Js Code
function fnHideSticky() {
    if (_stickybanner.length > 0) {
        setCookie('StickyHide', true);
        ToggelSticky();
    }
}
///To Apply Sticky To Toggle
function ToggelSticky() {
    if (_stickybanner.length > 0) {
        if (getCookie('StickyHide') != null || getCookie('StickyHide') != undefined) {
            $(_stickybanner).addClass('no-display');
        } else {
            $(_stickybanner).removeClass('no-display');
        }
    }
}