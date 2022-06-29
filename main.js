/* Navbar*/

function hideIconBar(){
    var iconbar=document.getElementById('iconbar');
    var navigation=document.getElementById("navigation");
    iconbar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconbar=document.getElementById('iconbar');
    var navigation=document.getElementById("navigation");
    iconbar.setAttribute ('style', "display:block;");
    navigation.classList.add('hide');
}