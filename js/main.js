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
  const fountainInfo = document
    .querySelector("#fountainData")
    .querySelectorAll("p");
  const blackSwanInfo = document
    .querySelector("#blackSwanData")
    .querySelectorAll("p");
  const wrestlerInfo = document
    .querySelector("#wrestlerData")
    .querySelectorAll("p");
  const motherInfo = document
    .querySelector("#motherData")
    .querySelectorAll("p");
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
    requiemInfo[8].textContent = data.requiem[5];

    //The Fountain
    fountainInfo[0].textContent = data.fountain[0];
    fountainInfo[2].textContent = data.fountain[1];
    fountainInfo[3].textContent = data.fountain[2];
    fountainInfo[5].textContent = data.fountain[3];
    fountainInfo[6].textContent = data.fountain[4];
    fountainInfo[8].textContent = data.fountain[5];

    //Black Swan
    blackSwanInfo[0].textContent = data.blackSwan[0];
    blackSwanInfo[2].textContent = data.blackSwan[1];
    blackSwanInfo[3].textContent = data.blackSwan[2];
    blackSwanInfo[5].textContent = data.blackSwan[3];
    blackSwanInfo[6].textContent = data.blackSwan[4];
    blackSwanInfo[8].textContent = data.blackSwan[5];

    //Wrestler
    wrestlerInfo[0].textContent = data.wrestler[0];
    wrestlerInfo[2].textContent = data.wrestler[1];
    wrestlerInfo[3].textContent = data.wrestler[2];
    wrestlerInfo[5].textContent = data.wrestler[3];
    wrestlerInfo[6].textContent = data.wrestler[4];
    wrestlerInfo[8].textContent = data.wrestler[5];

    //Mother
    motherInfo[0].textContent = data.mother[0];
    motherInfo[2].textContent = data.mother[1];
    motherInfo[3].textContent = data.mother[2];
    motherInfo[5].textContent = data.mother[3];
    motherInfo[6].textContent = data.mother[4];
    motherInfo[8].textContent = data.mother[5];
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
