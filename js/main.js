$(document).ready(function() {


// $('.parallax-window').parallax({imageSrc: 'images/retina1.jpg'})


// }
var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

})