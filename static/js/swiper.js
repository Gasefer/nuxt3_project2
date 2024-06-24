var swiper = new Swiper(".my_swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let btnText = document.getElementById("myBtnAbout");
if (btnText) {
  let moreText = document.getElementById("about-us-more");
  let btnTextSpan = btnText.querySelector("span");
  let btnTextI = btnText.querySelector("i");
  let aboutUsUnderhead = document.querySelector(".about-us_underhead");
  let aboutUsOpen = true;

  function myFunctionAbout() {
    if (aboutUsOpen === false) {
      btnTextSpan.innerHTML = "Сховати";
      btnTextI.style.transform = "rotate(180deg)";
      moreText.style.display = "block";
      aboutUsOpen = true;
      aboutUsUnderhead.style.background = "";
      aboutUsUnderhead.style.webkitBackgroundClip = "";
      aboutUsUnderhead.style.webkitTextFillColor = "";
      aboutUsUnderhead.style.backgroundClip = "";
      aboutUsUnderhead.style.textFillColor = "";
    } else {
      btnTextSpan.innerHTML = "Читати далі";
      btnTextI.style.transform = "rotate(0deg)";
      moreText.style.display = "none";
      aboutUsOpen = false;
      aboutUsUnderhead.style.background =
        "linear-gradient(to top, #f8f8f8, #121212)";
      aboutUsUnderhead.style.webkitBackgroundClip = "text";
      aboutUsUnderhead.style.webkitTextFillColor = "transparent";
      aboutUsUnderhead.style.backgroundClip = "text";
      aboutUsUnderhead.style.textFillColor = "transparent";
    }
  }
  myFunctionAbout();
}
