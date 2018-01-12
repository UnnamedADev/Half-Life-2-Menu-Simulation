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
        // ### background div
        refreshMask(true);
        
        var newClose = document.getElementsByClassName("dialog_close");
        addCloseButtonEvent(newClose);
        
        // ### dynamic content
        
        var clickedName = clickedObj.innerHTML;
        switch(clickedName){
            case "new game":
                
                break;
            case "load game":
                break;
            case "achievements":
                break;
            case "options":
                
                break;
            case "quit":

                break;
            default:
                console.log("DEFAULT");
        }
    
    }
    
    function addCloseButtonEvent(closeButton){
        for(var i=0;i<closeButton.length;i++){
            closeButton[i].addEventListener("mouseenter", function(){
            this.setAttribute("src", "images/icon2.png");
            });
            closeButton[i].addEventListener("mouseleave", function(){
                this.setAttribute("src", "images/icon1.png");
            });
            closeButton[i].addEventListener("click", function(){
                var pageBody = document.getElementsByTagName("body")[0];
                var dialogWindow = document.getElementsByClassName("dialog_window")[0];
                pageBody.removeChild(dialogWindow);
                // ### background div
                refreshMask(false);
            });
        }
        
    }
    
    function refreshMask(state){
        var duration = 500;
        var maskDiv = document.getElementsByClassName("mask")[0];
        
        switch(state){
            case true:
                $(maskDiv).fadeIn(duration);
                break;
            case false:
                $(maskDiv).fadeOut(duration);
                break;
            default: console.log("default");
        }
    }
    
});