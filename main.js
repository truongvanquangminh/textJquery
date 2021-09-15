//Jquery
$(document).ready(function () {

    $(document).on('contextmenu', function () {
        return false;
    });

    $(document).on('mousedown', function (e) {
        e.stopPropagation();

        if (e.which == 3) {

            $('.hidden').removeClass('shown');

            if ($(e.target).is('img')) {
                $('.saveimg, .newtab').addClass('shown');
            } else if ($(e.target).is('a')) {
                $('.newtab').addClass('shown');
            }

            console.log(e.pageY, e.pageX);
            $('#context').css({
                top: e.pageY,
                left: e.pageX
            });

            $('#context').fadeIn();
            return false;
        }
        $('#context').fadeOut();
    });

    $('[data-trigger="dropdown"]').on('mouseenter', function () {
        var submenu = $(this).parent().find('.profile-submenu');

        submenu.fadeIn(500);

        $('.profile-submenu').on('mouseleave', function () {
            submenu.fadeOut(500);
        });
    });

    $('input[name=email]').focusout(function() {
        if($(this).val().indexOf('@') > -1 && $(this).val().indexOf('.') > -1) {
            $('.status').html("Valid Email.");
        }else {
            $('.status').html('Your email in invalid. Please try again.');
        }
    });

});