function validate() {
    var valid = true;
    var fname = $("#fname").val();
    var $regexname = /^([a-zA-Z]{3,16})$/;
    var firstname = $('#fname').val();
    var name_regex = /^[a-zA-Z]+$/;
    var lname = $("#lname").val();
    var email = $("form#register_form input[name='email']").val();
    var email_regex = /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/;
    var password = $("#pass").val();
    var Confirm_password = $("#password").val();

    // if (lname == "" || lname == null) {
    //     valid = false;
    //     $("#fname_error").html("* Please enter first name.");
    // } else {
    //     $("#fname_error").html("");
    // }

    if (firstname.length == 0) {
        $('#fname').text("* All fields are mandatory *");
        $("#fname").focus();
        return false;
    } else if (!firstname.match(name_regex) || firstname.length == 0) {
        $('.error').text("* For your name please use alphabets only *");
        $("#fname").focus();
        return false;
    }

    if (lname == "" || lname == null) {
        valid = false;
        $("#lname_error").html("* Please enter last name.");
    } else {
        $("#lname_error").html("");
    }

    if (email == "") {
        $("span.val_email").html("This field is required.").addClass("validate");
        validation_holder = 1;
    } else {
        if (!email_regex.test(email)) {
            $("#email_error")
                .html("Please enter valid email.")
                .addClass("validate");
            validation_holder = 1;
        } else {
            $("#email_error").html("");
        }
    }
    if (password == "" || password == null) {
        valid = false;
        $("#password_error").html("* Please enter password.");
    } else if (password.length < 6) {
        valid = false;
        $("#password_error").html("* Please enter Atleast 6 character.");
    } else {
        $("#password_error").html("");
    }

    if (Confirm_password == "" || Confirm_password == null) {
        valid = false;
        $("#confirm_password_error").html("* Please enter Confirm password.");
    } else {
        $("#confirm_password_error").html("");
    }

    if (valid == false) {
        return false;
    } else {
        alert("You form is ready to submit.");
        return true;
    }
}