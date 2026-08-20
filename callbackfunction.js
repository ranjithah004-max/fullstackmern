//callback function-->A callback function is a function passedinto another function as an argument,which is then invoked inside the outer function to complete some kind of action
function hii() {
    console.log("Hello");
}

function process(callback) {
    callback();
}

process(hii);

//callback  with parameters