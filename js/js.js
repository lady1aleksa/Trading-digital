$(document).ready(function () {


    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate() {
        var email = $("#email").val();
        var name = $("#name").val();
        var surname = $("#surname").val();
        if (!validateEmail(email)) {
            $('.email_warning').show(100);
        }
        if (!name) {
            $('.name_warning').show(100);
        }
        if (!surname) {
            $('.surname_warning').show(100);
        }
        return false;
    }

    $("#submit").click(validate);
    $('.input').focus(function () {
        $('.warning').hide(100);
    });


});