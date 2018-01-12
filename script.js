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
        
        // ### close buttons events
        addCloseButtonEvent();
    }
    
    function createDialogWindow(clickedObj){
        
        // ### background div
        refreshMask(true);
        
        var duration = 150;
        // ### dialog windows
        var clickedName = clickedObj.innerHTML;
        switch(clickedName){
            case "new game":
                $(".newGame").fadeIn(duration);
                break;
            case "load game":
                $(".loadGame").fadeIn(duration);
                break;
            case "achievements":
                $(".achievements").fadeIn(duration);
                break;
            case "options":
                $(".options").fadeIn(duration);
                break;
            case "quit":
                $(".quit").fadeIn(duration);
                break;
            default:
                console.log("DEFAULT");
        }
    
    }
    
    function addCloseButtonEvent(closeButton){
        
        var buttons = document.getElementsByClassName("closeButton");
        
        for(var i=0;i<buttons.length;i++){
            
            buttons[i].addEventListener("click",function(){
                var allClass = this.parentElement.parentElement.className;
            
                var validClass = allClass.slice(13,allClass.length);
                var validWindow = document.getElementsByClassName(validClass)[0];
                $(validWindow).fadeOut(100);
                
               
                
                var dialogWindow = document.getElementsByClassName("dialogWindow");
                var state = 0;
                
                for(var j=0;j<dialogWindow.length;j++){
                    if(dialogWindow[j].offsetHeight>0){
                        state++;
                    }
                }
                
                switch(state){
                    case 1:
                        refreshMask(false);
                        state=0;
                        break;
                    default:
                        state--;
                        break;
                }
            });
            buttons[i].addEventListener("mouseenter",function(){
                this.setAttribute("src", "images/icon2.png");
            });
            buttons[i].addEventListener("mouseleave",function(){
                this.setAttribute("src", "images/icon1.png");
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