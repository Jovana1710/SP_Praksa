function myHamburger() {
    var lista2 = document.getElementById("lista2");
    if(lista2.style.display === "flex"){
        lista2.style.display = "none";
    } else {
        lista2.style.display = "flex";
        lista2.style.flexDirection = "column";
    }
}
