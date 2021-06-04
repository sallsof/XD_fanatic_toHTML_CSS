//toggle menu
let toggleBtn = document.querySelector(".drop-menue");
let tlinks = document.querySelector (".links2");

toggleBtn.onclick = function (e){

    //Stop propagation
    e.stopPropagation();

    //Toggle Class "menu-active" on button
    this.classList.toggle("menu-active");

    //togle Class "open" on links
    tlinks.classList.toggle("open");

};

//click anyway to close menue
document.addEventListener("click", (e) =>{

    if(e.target !== toggleBtn && e.target !== tlinks){

        //check if menu is open
        if(tlinks.classList.contains("open")) {

            // Toggle Class menu-active on button
            toggleBtn.classList.toggle("menu-active");

            //Toggle class open on links
            tlinks.classList.toggle("open");
        }
    }

});



// Stop Propagation On Menu
tlinks.onclick = function (e) {
    e.stopPropagation();
  }