(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function disableselect(e){
return false
}
function reEnable(){
return true
}
document.onselectstart=new Function (&quot;return false&quot;)
if (window.sidebar){
document.onmousedown=disableselect
document.onclick=reEnable
}

window.onbeforeunload = function(){ window.scrollTo(0,0); }