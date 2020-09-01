$(function () {

    $('#birthday').pickadate();

    // uncheck all checkboxes (FireFox)
    function unCheckAll() {
        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
        });
    }

    unCheckAll();

    /*
     *
     * // make the image visible
        console.log(this);
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
     *
     */

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        zoomZoom(this);
    });

    //do the work of animating balloons
    function zoomZoom(balloon) {
        // make the image visible
        $('#' + balloon.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(balloon).is(':checked') ?
            $('#' + balloon.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + balloon.id + 'Img').addClass('animated bounceOutUp');
    }

    //Random attention seeker setter
    var randNum = Math.floor(Math.random() * 12);
    switch(randNum) {
        case 0:
            $('#birthdayTime').addClass('animated bounce');
            break;
        case 1:
            $('#birthdayTime').addClass('animated flash');
            break;
        case 2:
            $('#birthdayTime').addClass('animated pulse');
            break;
        case 3:
            $('#birthdayTime').addClass('animated rubberBand');
            break;
        case 4:
            $('#birthdayTime').addClass('animated shakeX');
            break;
        case 5:
            $('#birthdayTime').addClass('animated shakeY');
            break;
        case 6:
            $('#birthdayTime').addClass('animated headShake');
            break;
        case 7:
            $('#birthdayTime').addClass('animated swing');
            break;
        case 8:
            $('#birthdayTime').addClass('animated tada');
            break;
        case 9:
            $('#birthdayTime').addClass('animated wobble');
            break;
        case 10:
            $('#birthdayTime').addClass('animated jello');
            break;
        case 11:
            $('#birthdayTime').addClass('animated heartBeat');
            break;
    }

    var submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click",
        function() {
            $('.form-check-input').each(function () {
                if ($(this).prop('checked')) {
                    console.log("Hi");
                }
            });
            var anyChecked = false;
            var formChecks = document.querySelectorAll('.form-check-input');
            for (var x = 0; x < formChecks.length; x++) {
                if (formChecks[x].checked) anyChecked = true;
            }
            if (!anyChecked) {
                //display toast
                $('#toast').toast({ autohide: false }).toast('show');
            }
        });

    //uncheck btn functionality
    var unChkBtn = document.getElementById("unCheck");
    unChkBtn.addEventListener("click", function() {
        unCheckAll();
        console.log("I'm trying");
        var formChecks = document.querySelectorAll('.form-check-input');
        for (var x = 0; x < formChecks.length; x++) {
            zoomZoom(formChecks[x]);
        }
    });

    var happyBirthday = document.getElementById("birthdayTime");

    var formCheckInputRed = document.querySelector("#red");
    var formCheckRed = formCheckInputRed.parentNode;
    formCheckRed.addEventListener("mouseover",function() {
        happyBirthday.style.color = "red";
    });
    formCheckRed.addEventListener("mouseout", function() {
        happyBirthday.style.color = "black";
    });

    var formCheckInputBlue = document.querySelector("#blue");
    var formCheckBlue = formCheckInputBlue.parentNode;
    formCheckBlue.addEventListener("mouseover", function () {
        happyBirthday.style.color = "blue";
    });
    formCheckBlue.addEventListener("mouseout", function () {
        happyBirthday.style.color = "black";
    });

    var formCheckInputGreen = document.querySelector("#green");
    var formCheckGreen = formCheckInputGreen.parentNode;
    formCheckGreen.addEventListener("mouseover", function () {
        happyBirthday.style.color = "green";
    });
    formCheckGreen.addEventListener("mouseout", function () {
        happyBirthday.style.color = "black";
    });

    var Bob = document.querySelector("[for='red']");
    console.log(Bob);
});