$(document).ready(function() {
    
    $('#jqueryPlay').click(function (){
        $('#jqueryDiv').animate({marginLeft: 700}, {duration: 3000, easing: "linear"});
    });
    
    $('#velocityPlay').click(function (){
        $('#velocityDiv').velocity({marginLeft: 700}, {duration: 3000, easing: "linear"});  
    });
    
    $('#Play').click(function (){
        $('#jqueryDiv').animate({marginLeft: 700}, {duration: 3000, easing: "linear"});
        $('#velocityDiv').velocity({marginLeft: 700}, {duration: 3000, easing: "linear"});  
    });
    
    $('#Reset').click(function (){
        $('#jqueryDiv').animate({marginLeft: 0});
        $('#velocityDiv').velocity({marginLeft: 0});  
    });
    
});