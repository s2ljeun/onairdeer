const webAddress = document.getElementById("web-address");

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addSong);

const playList = document.querySelector(".play-list li");

function addSong(event){
  event.preventDefault();
  playList.textContent = webAddress.value;
  webAddress.value = "";
}
