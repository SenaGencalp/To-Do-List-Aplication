document.addEventListener("DOMContentLoaded", function () {
  let mybutton = document.getElementById("myBtn");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  mybutton.addEventListener("click", function () {
    // Tarayıcı desteğini kontrol edin
    if ("scrollBehavior" in document.documentElement.style) {
      //Yukarıya doğru yumuşak kaydırma
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Düzgün kaydırmayı desteklemeyen tarayıcılar için geri dönüş
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
});
