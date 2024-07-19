
var node;
if(true) {
    node = document.getElementsByClassName('top-nav-bar');
}
else {
    // node = document.getElementById('else-part');
}
node.forEach(element => {
    element.style.visibility = 'visible';
});

// node.style.visibility = 'visible';