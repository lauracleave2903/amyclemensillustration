//DELAYING THE CODE FROM EXECUTING UNTIL ALL DOM ASSETS HAVE BEEN LOADED

$(document).ready(function () {

    // WINDOW SCROLL
    $(window).on("scroll touchmove", function () {

        // GET THE VALUE OF THE WINDOW
        var scrollTop = $(document).scrollTop();

        // SETTING IF / IF ELSE CONDITIONALS 

        // FADE ARROW IN/OUT
        if (scrollTop > 150) {
            $('.arrowUp').css({
                opacity: 1
            });
        } else {
            $('.arrowUp').css({
                opacity: 0
            });
        }

        // CAN'T GET AN ACTUAL 'FADE' HAPPENING, IT JUST APPEARS
    });


    // FORM SUBMIT
    $('input[type="submit"]').click(function (event) {

        // STOP THE DEFAULT FORM ACTION FROM EXECUTING
        event.preventDefault();

        // GET THE VALUE OF THE TEXT INPUT FIELDS
        var textIncomplete = $('input[type="text"]').val().length;
        var emailIncomplete = $('input[type="email"]').val().length;
        var textareaIncomplete = $('textarea').val().length;

        //CORRECTING CASE TYPE
        var textIncomplete = textIncomplete.toLowerCase();
        var emailIncomplete = emailIncomplete.toLowerCase();
        var textareaIncomplete = textareaIncomplete.toLowerCase();

        // REMOVING EXTRA SPACES THAT USERS MIGHT ADD BEFORE OR AFTER THEIR IMPUT
        var textIncomplete = textIncomplete.trim();
        var emailIncomplete = emailIncomplete.trim();
        var textareaIncomplete = textareaIncomplete.trim();

        // SETTING IF / IF ELSE CONDITIONALS 

        // CHECK IF NOTHING WAS ENTERED USING THE VARIABLE
        if (textIncomplete < 1 || emailIncomplete < 1 || textareaIncomplete < 1) {

            // SHOW ALERT
            alert("Incomplete Text Fields");
        } else {
            $('input[type="submit"]').submit();
        }

        //RESETTING THE 'input[type="text"]' FIELD AFTER CLICKING SUBMIT
        $('input[type="text"]').val("");
        $('input[type="text"]').attr("placeholder", "* Name");

        //RESETTING THE 'input[type="email' FIELD AFTER CLICKING SUBMIT
        $('input[type="email"]').val("");
        $('input[type="email"]').attr("placeholder", "* Email");

        //RESETTING THE 'textarea' FIELD AFTER CLICKING SUBMIT
        $('textarea').val("");
        $('textarea').attr("placeholder", "* Message");
    });

});
