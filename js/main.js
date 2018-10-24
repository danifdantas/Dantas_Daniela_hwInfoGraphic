(() => {
  //
  const hover = document.querySelector("#hover");
  const info = document.querySelectorAll(".info");
  const svg = document.querySelectorAll(".svg");

  let pisvg = document.querySelector("#awards_22_");
  //
  function showInfo() {
    info.forEach(item => item.classList.add("show"));
  }
  function hideInfo() {
    info.forEach(item => item.classList.remove("show"));
  }
  //

  hover.addEventListener("mouseover", showInfo, false);
  hover.addEventListener("mouseout", hideInfo, false);

  //Tween Animation
  TweenMax.from("#pi", 2, {
    opacity: 0,
    scale: 0,
    ease: Power4.easeInOut
  });

  TweenMax.to("#awards_22_", 0.5, { rotation: 0, transformOrigin: "50% 50%" });
})();
