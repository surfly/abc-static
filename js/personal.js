/** Desktop view  **/
$(document).ready(function() {

    $("#TopMenu1").on('mouseover', function() {
        $("#childmenu02").css("display", "block");
        if (!$("#TopMenu1").hasClass("vertical-line"))
            $("#TopMenu1").addClass("vertical-line");
    });

    $("#TopMenu2").on('mouseover', function() {
        $("#childmenu03").css("display", "block");
        if ($("#TopMenu1").hasClass("vertical-line"))
            $("#TopMenu1").removeClass("vertical-line");
    });

    $("#TopMenu2").on('mouseout', function() {
        if (!$("#TopMenu1").hasClass("vertical-line"))
            $("#TopMenu1").addClass("vertical-line");
    });

    $("#ParentMenu0").mouseover(function() {
        $("#menu01").css("display", "block");
    });

    $("#ParentMenu1").mouseover(function() {
        $("#menu02").css("display", "block");
    });

    $("#ParentMenu2").mouseover(function() {
        $("#menu03").css("display", "block");
    });

    $("#ParentMenu3").mouseover(function() {
        $("#menu04").css("display", "block");
    });

    $(".nav-item").mouseout(function() {
        $(".dropdown-menu").css("display", "none");

    })

    $("#Mainmenu-dropdown .nav-item").mouseover('shown.bs.dropdown', function() {
        ShowIconDropuparrow(this);
    });
    $("#Mainmenu-dropdown .nav-item").mouseout('shown.bs.dropdown', function() {

        ShowIconDropdownarrow(this);
    });

    $("#header-dropdown .nav-item").mouseover('shown.bs.dropdown', function() {
        ShowIconDropuparrow(this);
    });
    $("#header-dropdown .nav-item").mouseout('shown.bs.dropdown', function() {
        ShowIconDropdownarrow(this);
    });

    $(window).resize(function() {
        var win = $(this);
        if (win.width() > 601) {
            $(".tab-pane").show();
        }
    })
});

function ShowIconDropuparrow(element) {
    $(element).children(":first").removeClass("ico-drop");
    $(element).children(":first").addClass("ico-drop-up");
}

function ShowIconDropdownarrow(element) {
    $(element).children(":first").removeClass("ico-drop-up");
    $(element).children(":first").addClass("ico-drop");
}

/** Mobile view  **/
$(document).ready(function() {

    $("#CorporateMegaMenu").css("display", "none");
    $("#AdvisorMegaMenu").css("display", "none");

    $("#MobileTopMenu0").click(function() {
        if ($("#mobile-header-dropdown").children().hasClass("selected-menu"))
            $("#mobile-header-dropdown").children().removeClass("selected-menu")
        $(".mob-top-images").css("display", "table");
        $("#MobileTopMenu0").addClass("selected-menu");
        $("#CorporateMegaMenu").css("display", "none");
        $("#AdvisorMegaMenu").css("display", "none");
        $("#PersonalMainMenu").css("display", "block");
        if (!$("#MobileTopMenu1").hasClass("vertical-line")) {
            $("#MobileTopMenu1").addClass("vertical-line")
        }
    });

    $("#MobileTopMenu1").click(function() {
        if ($("#mobile-header-dropdown").children().hasClass("selected-menu"))
            $("#mobile-header-dropdown").children().removeClass("selected-menu")
        $("#MobileTopMenu1").addClass("selected-menu");
        $("#mobile-header-dropdown").css("padding-bottom", "0px")
        $(".mob-top-images").css("display", "none");
        $("#PersonalMainMenu").css("display", "none");
        $("#AdvisorMegaMenu").css("display", "none");
        $("#CorporateMegaMenu").css("display", "block");

        if ($("#MobileTopMenu1").hasClass("vertical-line")) {
            $("#MobileTopMenu1").removeClass("vertical-line")
        }
    });

    $("#MobileTopMenu2").click(function() {
        if ($("#mobile-header-dropdown").children().hasClass("selected-menu"))
            $("#mobile-header-dropdown").children().removeClass("selected-menu")
        $("#MobileTopMenu2").addClass("selected-menu");
        $("#mobile-header-dropdown").css("padding-bottom", "0px")
        $(".mob-top-images").css("display", "none");
        $("#PersonalMainMenu").css("display", "none");
        $("#CorporateMegaMenu").css("display", "none");
        $("#AdvisorMegaMenu").css("display", "block");

        if ($("#MobileTopMenu1").hasClass("vertical-line")) {
            $("#MobileTopMenu1").removeClass("vertical-line")
        }
    });

});


$(document).ready(function() {
    $(window).resize(function() {
            var width = $(window).width();

            if (width >= 1200) {
                $('.mast_head').removeClass('container-fluid').addClass('container');
            } else if (width >= 801 && width <= 1200) {
                $('.mast_head').removeClass('container-fluid').addClass('container');
            } else if (width >= 320 && width <= 800) {
                $('.mast_head').removeClass('container').addClass('container-fluid');
            }
        })
        .resize();
});

$(document).ready(function() {
    $(".mob-others").click(function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass("open")
        } else {
            $(this).addClass("open")
        }
        $(".othersToggle").slideToggle();
    });
});