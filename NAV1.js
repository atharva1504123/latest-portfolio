/** code by webdevtrick ( https://webdevtrick.com ) **/
(function ($) {
  $(function () {
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function () {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function () {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  });
})(jQuery);

window.addEventListener("DOMContentLoaded", () => {
  const cube = document.querySelector(".cube"),
      imageButtons = document.querySelector(".image-buttons");
  let cubeImageClass = cube.classList[1];
  imageButtons.addEventListener("click", e => {
      const targetNode = e.target.nodeName,
          targetClass = e.target.className;
      if (targetNode === "INPUT" && targetClass !== cubeImageClass) {
          console.log(`Show Image: ${targetClass.charAt(11)}`);
          cube.classList.replace(cubeImageClass, targetClass);
          cubeImageClass = targetClass;
      }
  });
});