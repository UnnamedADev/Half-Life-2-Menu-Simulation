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

        // ### action
        var newAction = document.createElement("div");
        newAction.classList.add("dialog_action");
        newWindow.appendChild(newAction);
        
        // ### title
        var newTitle = document.createElement("h2");
        newTitle.classList.add("dialog_title");
        newAction.appendChild(newTitle);
        newTitle.innerHTML = clickedObj.innerHTML;
        // ### close
        var newClose = document.createElement("img");
        newClose.classList.add("dialog_close");
        newClose.setAttribute("src","images/icon1.png");
        newAction.appendChild(newClose);
        
        addCloseButtonEvent(newClose);
        
        // ### dynamic content
        var newDynamicContent = document.createElement("div");
        newDynamicContent.classList.add("dialog_dynamic_content");
        newWindow.appendChild(newDynamicContent);
        
        var clickedName = clickedObj.innerHTML;
        switch(clickedName){
            case "new game":
                newDynamicContent.innerHTML=content[clickedName];
                newDynamicContent.classList.add("window_newGame");
                break;
            case "load game":
                newDynamicContent.innerHTML=content[clickedName];
                newDynamicContent.classList.add("window_loadGame");
                break;
            case "achievements":
                newDynamicContent.innerHTML=content[clickedName];
                newDynamicContent.classList.add("window_achievements");
                break;
            case "options":
                newDynamicContent.innerHTML=content[clickedName];
                newDynamicContent.classList.add("window_options");
                break;
            case "quit":
                newDynamicContent.innerHTML=content[clickedName];
                newDynamicContent.classList.add("window_quit");
                break;
            default:
                console.log("DEFAULT");
        }
    
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