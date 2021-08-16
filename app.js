const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#header__links");

hamburger.addEventListener("click", function() {
    console.log("click click click");

    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }

});