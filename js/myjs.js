$(document).ready(function() {
    
    var width = window.innerWidth;
    var l = width*0.4;
    
    $('#jqueryPlay').click(function (){
        $('#jqueryDiv').animate({marginLeft: l}, {duration: 3000, easing: "linear"});
    });
    
    $('#velocityPlay').click(function (){
        $('#velocityDiv').velocity({marginLeft: l}, {duration: 3000, easing: "linear"});  
    });
    
    $('#Both').click(function (){
        $('#jqueryDiv').animate({marginLeft: l}, {duration: 3000, easing: "linear"});
        $('#velocityDiv').velocity({marginLeft: l}, {duration: 3000, easing: "linear"});  
    });
    
    $('#Reset').click(function (){
        $('#jqueryDiv').animate({marginLeft: 0});
        $('#velocityDiv').velocity({marginLeft: 0});  
    });    
});