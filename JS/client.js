$(function () {

    // preload audio
    var toast = new Audio('media/toast.wav');


    function BOB() {
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        //BOB();
    }

    

    $('.code').on('click', function (e) {
        e.preventDefault();
        BOB();
        //show toast
        $('#toast').toast({ autohide: false }).toast('show');
        //Change values
        $('#product').html($(e.target).data().product);
        $('#code').html($(e.target).data().code);
    });


    document.addEventListener("keyup", (evt) => {
        evt.preventDefault();
        if (evt.key =="Escape") {
            $('#toast').toast({ autohide: false }).toast('hide');
        }
    });

    

});