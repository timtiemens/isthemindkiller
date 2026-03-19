
document.addEventListener("DOMContentLoaded", function(){
  var btn = document.getElementById("mobile-menu");
  var drawer = document.getElementById("mobile-drawer");
  if(btn){
    btn.onclick = () => drawer.classList.toggle("open");
  }
});
