// JavaScript source code

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x !== "4738920198") {
        alert("Wrong code, try again.");
        return false;
    } else alert("Congratulations! You discoverd the correct code");
}