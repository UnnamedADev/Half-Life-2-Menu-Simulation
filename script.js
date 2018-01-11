"use strict";

document.addEventListener("DOMContentLoaded", function(){

    //main
    addEvents();
    
    //functions
    function addEvents(){
        
        var gameMenu = document.getElementsByClassName("main_menu")[0];

        var menuElements = gameMenu.getElementsByTagName("a");
       
        for(var i=0;i<menuElements.length;i++){
            menuElements[i].addEventListener("click",function(){
                createDialogWindow(this);
            });
        }
    }
    
    function createDialogWindow(clickedObj){
        
        var title = clickedObj.innerHTML;
        var pageBody = document.getElementsByTagName("body")[0];
        
        // ### dialog window
        var newWindow = document.createElement("div");
        newWindow.classList.add("dialog_window");
        pageBody.appendChild(newWindow);
        // ### container inside
        var newContainer = document.createElement("div");
        newContainer.classList.add("dialog_container");
        newWindow.appendChild(newContainer);
        // ### title
        var newTitle = document.createElement("h2");
        newTitle.classList.add("dialog_title");
        newContainer.appendChild(newTitle);
        newTitle.innerHTML = clickedObj.innerHTML;
        // ### close
        var newClose = document.createElement("img");
        newClose.classList.add("dialog_close");
        newClose.setAttribute("src","images/icon1.png");
        newContainer.appendChild(newClose);
    }
});