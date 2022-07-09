// --- control player ---

const audio = new Audio();
let recordingFile = `./assets/audio/solovey.mp3`; // default bird sound
const audioButton = document.querySelector(".audio-button");
const logoBird = document.querySelector(".logo-bird");

function controlLogoPlayer() {
  //switch logo and add class "pause"
  audioButton.classList.toggle("pause");
  logoBird.classList.toggle("pause");
}

function controlPlayer() {
  //player controls

  if (audioButton.classList.contains("pause")) {
    audio.src = recordingFile;
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
  }
}

audioButton.addEventListener("click", controlLogoPlayer);
audioButton.addEventListener("click", controlPlayer);

//--- switch another bird ---

const btnsBird = document.querySelector(".btns-bird");
const btnBird = document.querySelectorAll(".btn-bird");
const mainImage = document.querySelector(".main-image");

function changeBird(event) {
  let dataAttribute = event.target.dataset.bird;
  if (event.target.classList.contains("btn-bird")) {
    mainImage.style.backgroundImage = `url("./assets/img/${dataAttribute}.jpg")`; //URL image
    recordingFile = `./assets/audio/${dataAttribute}.mp3`; // URL bird sound
    audioButton.classList.remove("pause");
    logoBird.classList.remove("pause");
    audio.pause();
  }
}

btnsBird.addEventListener("click", changeBird);

//--switch buttons colour--

btnsBird.addEventListener("click", (event) => {
  btnBird.forEach((el) => el.classList.remove("active"));
  event.target.classList.add("active");
});
