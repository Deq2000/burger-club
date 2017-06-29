/* global $ */
$(document).ready(function() {
    
  $("#signUp").click(function() {
      alert("Hi! Thank you for signing up! We will send you an email shortly!");
  });
   
  
  
  $(".media").mouseenter(function(){
    $(this).stop(true,true).animate({height: "75px", width: "75px"}, "slow");
	}).mouseleave(function(){
	  $(this).stop(true,true).animate({height: "50px", width: "50px"}, "slow");
	})
  


});
