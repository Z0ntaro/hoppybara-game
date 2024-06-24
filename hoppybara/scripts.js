const capybara = document.getElementById("capybara");
const cactus = document.getElementById("cactus");

function jump() {
  if (capybara.classList != "jump") {
    capybara.classList.add("jump");

    setTimeout(function () {
      capybara.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current capybara Y position
  let capybaraTop = parseInt(window.getComputedStyle(capybara).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && capybaraTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
