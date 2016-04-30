$(function(){

  $().addClass("loaded");

  $('.signin-form .input-password .show-toggle').click(function(){

    $(this).toggleClass("fa-eye-slash",$(this).hasClass("fa-eye"));
    $(this).toggleClass("fa-eye",!$(this).hasClass("fa-eye-slash"));

    if($('.signin-form .input-password .show-toggle').hasClass("fa-eye-slash")) {
      $('.signin-form .input-password .input-field').clone().attr('type','text').insertAfter('.signin-form .input-password .input-field').prev().remove();

    } else {
      $('.signin-form .input-password .input-field').clone().attr('type','password').insertAfter('.signin-form .input-password .input-field').prev().remove();

    }

  });

});

function toggle() {
  if($('.input-password').hasClass("has-value")) {
    $('.signin-form .input-password .show-toggle').show();
  } else {
    $('.signin-form .input-password .show-toggle').hide();
  }
}
