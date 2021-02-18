var el = document.getElementsByClassName('submenu-item');


for(var i=0; i<el.length; i++) {
   el[i].addEventListener("mouseenter", showSubmenu, false);
   el[i].addEventListener("mouseleave", hideSubmenu, false);
}

function showSubmenu(e) {
   if(this.children.length>1) {
      this.children[1].style.height = "auto";
      this.children[1].style.overflow = "visible";
      this.children[1].style.opacity = "1";
    } else {
      return false;
   }
}

function hideSubmenu(e) {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}

