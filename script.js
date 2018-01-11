"use strict";

document.addEventListener("DOMContentLoaded", function(){
    
    // ### MAIN
    addEvents();
    
    // ### FUNCTIONS
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
        
        addCloseButtonEvent(newClose);
        
        // ### dynamic content
        var newDynamicContent = document.createElement("div");
        newDynamicContent.classList.add("dialog_dynamic_content");
        newContainer.appendChild(newDynamicContent);
        
        newDynamicContent.innerHTML=content[0];
    }
    
    function addCloseButtonEvent(closeButton){
        closeButton.addEventListener("mouseenter", function(){
            this.setAttribute("src", "images/icon2.png");
        });
        closeButton.addEventListener("mouseleave", function(){
            this.setAttribute("src", "images/icon1.png");
        });
        closeButton.addEventListener("click", function(){
            var pageBody = document.getElementsByTagName("body")[0];
            var dialogWindow = document.getElementsByClassName("dialog_window")[0];
            pageBody.removeChild(dialogWindow);
        });
    }
    
});