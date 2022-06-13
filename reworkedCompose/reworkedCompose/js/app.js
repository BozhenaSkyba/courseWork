// Header fixed

window.addEventListener("scroll", function () {
  const nav = this.document.querySelector(".nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

$(function () {
  // Smooth scroll

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    const $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      1000
    );
  });

  // Slider about

  const sliderAbout = $("#container__slider");

  sliderAbout.slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
    dots: false,
    arrows: false,
    mobileFirst: true,
  });

  const sliderNews = $("#news__slider");

  sliderNews.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  const form = document.forms.contact;

  function submitForm(e) {
    e.preventDefault();
    const userName = form.elements["Username"].value;
    const userEmail = form.elements["email"].value;

    fetch("https://compose-design-app.herokuapp.com/contact", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: userEmail,
        userName: userName,
      }),
    })
      .then(() => {
        form.elements["Username"].value = null;
        form.elements["email"].value = null;
        $(".contact__send--success").show();
      })
      .catch(() => {
        $(".contact__send--fail").hide();
      })
      .finally(
        setTimeout(() => {
          $(".contact__send--fail").hide();
          $(".contact__send--success").hide();
        }, 3000)
      );
  }
  form.addEventListener("submit", submitForm);
});
