(() => {
  //VARIABLES
  const hover = document.querySelector("#hover");
  const info = document.querySelectorAll(".info");
  const svg = document.querySelectorAll(".svg");
  var year = document.querySelectorAll(".year");
  //var piData = document.querySelector("#piData");
  const awardData = document.querySelectorAll(".grid-bg");
  const piInfo = document.querySelector("#piData").querySelectorAll("p");
  const requiemInfo = document
    .querySelector("#requiemData")
    .querySelectorAll("p");
  //const imgProf = document.querySelector("#profes");

  // FUNCTION

  // add content to paragraphs with Javascript
  function setAwardsInfo(data) {
    piInfo[0].textContent = data.pi[0];
    piInfo[2].textContent = data.pi[1];
    piInfo[3].textContent = data.pi[2];
    piInfo[5].textContent = data.pi[3];
    piInfo[6].textContent = data.pi[4];
    piInfo[8].textContent = data.pi[5];

    //Requiem
    requiemInfo[0].textContent = data.requiem[0];
    requiemInfo[2].textContent = data.requiem[1];
    requiemInfo[3].textContent = data.requiem[2];
    requiemInfo[5].textContent = data.requiem[3];
    requiemInfo[6].textContent = data.requiem[4];
  }
  // HOVER
  function showInfo() {
    info.forEach(item => item.classList.add("show"));
  }
  function hideInfo() {
    info.forEach(item => item.classList.remove("show"));
  }
  function toggleInfo() {
    awardData.forEach(item => item.classList.remove("fadeOut"));
    awardData.forEach(item => item.classList.add("fadeIn"));
    //console.log("Hover");
  }
  function toggleInfoBack() {
    awardData.forEach(item => item.classList.remove("fadeIn"));
    awardData.forEach(item => item.classList.add("fadeOut"));

    //console.log("Hover");
  }
  //LISTENERS

  hover.addEventListener("mouseover", showInfo, false);
  hover.addEventListener("mouseout", hideInfo, false);
  for (i = 0; i < year.length; i++) {
    year[i].addEventListener("mouseover", toggleInfo);
    year[i].addEventListener("mouseout", toggleInfoBack);
  }
  setAwardsInfo(classData);

  //Tween Animation
  TweenMax.from("#pi", 2, {
    opacity: 0,
    scale: 0,
    ease: Power4.easeInOut
  });
})();
