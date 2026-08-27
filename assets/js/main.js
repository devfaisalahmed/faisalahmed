$(function () {
  // footer current year
  $("#currentYear").text(new Date().getFullYear());

  new WOW().init();
  // offcanvas 
// const offcanvasMenuHtml =$();
$('.wxheader-toggle').on('click',()=>{
  $('.wxoffcanvas-wrapper').addClass('wxoffcanvas-wrapper-active');
  $('.wxoffcanvas-overly').addClass('wxoffcanvas-overly-active');
})
$('.wxoffcanvas-close__button,.wxoffcanvas-overly').on('click',()=>{
  $('.wxoffcanvas-wrapper').removeClass('wxoffcanvas-wrapper-active');
  $('.wxoffcanvas-overly').removeClass('wxoffcanvas-overly-active');
})

let wxMenuHtml = $(".wxheader-nav> ul").clone();
  let wxOffcanvasMenu = $(".wxoffcanvas-menu > nav");

  wxOffcanvasMenu.append(wxMenuHtml);






});
