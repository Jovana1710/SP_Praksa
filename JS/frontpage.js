
function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
 }

 window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".overlay").style.display = "block";
        },
        3000
    )
});


/*document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

$("#cancel_edit").click(function(){
    window.open('','_parent',''); 
    window.close(); 
}); */