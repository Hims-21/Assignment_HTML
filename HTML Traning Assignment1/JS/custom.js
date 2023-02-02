const menubar = document.getElementById("menubar");
const sidebar = document.getElementById("sidebar");
menubar.onclick = function(){
    if(sidebar.style.display != "none"){
        sidebar.style.display = "none";
    }else{
        sidebar.style.display = "block"
    }
}