function validateLoginForm() {
    var email = document.forms["loginForm"]["idemail"].value;
    var pass = document.forms["loginForm"]["idpass"].value;
    if ((email === "") || (pass === "")) {
        alert("Please fill out your email/password");
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email))) {
        alert("Please correct your email");
        return false;
    }
    setCookies(10);
}

function validateRegForm() {
    var email = document.forms["registerForm"]["idemail"].value;
    var pass = document.forms["registerForm"]["idpass"].value;
    var ic = document.forms["registerForm"]["idIcnumber"].value;
    var pass1 = document.forms["registerForm"]["idpass"].value;
    var pass2 = document.forms["registerForm"]["idpassb"].value;

    if ((email === "") || (pass === "")) {
        alert("Please fill out your email/password");
        return false;
    } else
    if ((ic === "")) {
        alert("Please fill out your I/C");
        return false;
    } else if (pass1 != pass2) {
        alert("Your both password is not match")
        return false;
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email))) {
        alert("Please correct your email");
        return false;
    }

}