function goTo(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

function openLetter(letter) {
  letter.querySelector("span").style.display = "block";
}

function showResult(answer) {
  let resultText = "";

  if (answer === "smile") {
    resultText = "Your smile always brightens my day!";
  } else if (answer === "heart") {
    resultText = "Exactly 💕 Your kind heart makes everything better!";
  } else if (answer === "everything") {
    resultText = "Yes 😍 Everything about you is perfect, my bebi!";
  }

  document.getElementById("result").innerText = resultText;
}

function showBouquet() {
  document.getElementById("flowers").style.display = "block";
  document.getElementById("finalMessage").style.display = "block";
}

