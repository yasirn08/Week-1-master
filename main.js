function emailValidation() {
    var contents = document.forms["details"]["email"].value;
    var atChar = contents.indexOf('@');
    var dotChar = contents.indexOf('.');
    if (atChar == -1 || dotChar == -1) {
        alert("Wrong Email");
        return false;
    }
    else {
        alert("Not so wrong email");
        return false;
    }
}
function drawCanvas() {
    var canvas = document.getElementById("maincanvas");
    var context = canvas.getContext("2d")
    context.fillstyle = '#000000'
    context.fillRect(0, 0, 200, 200)
}