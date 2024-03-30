// смена темы
const element = document.querySelector("#button");
function handleClickFunction(event) {}

element.addEventListener("click", () => {
  button.classList.add("active");
  document.body.classList.toggle("dark-theme");
});

// Панель навигации
(function ($) {
  $(function () {
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      $(".dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  });
})(jQuery);

// Показать/скрыть кнопку при прокрутке страницы
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var button = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Плавная прокрутка вверх
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
