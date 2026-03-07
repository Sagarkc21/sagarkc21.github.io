// Typing animation for main words
const words = ["Data", "Enthusiast", "|", "Analytics", "&", "Quality"];
let i = 0;

function showWords() {
  const typingElement = document.getElementById("typing-text");
  typingElement.innerHTML += words[i] + " ";
  i++;
  if (i < words.length) {
    setTimeout(showWords, 300);
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      i = 0;
      showWords();
    }, 1000);
  } 
}

// Continuous animation for Engineer titles
const engineerTitles = ["Engineer", "Data QA", "Analyst"];
let j = 0;

function showEngineer() {
  const engineerElement = document.getElementById("engineer-text");
  engineerElement.innerHTML = ""; // Clear previous
  const title = engineerTitles[j];
  let k = 0;

  function typeTitle() {
    if (k < title.length) {
      engineerElement.innerHTML += title[k];
      k++;
      setTimeout(typeTitle, 150);
    } else {
      setTimeout(() => {
        j = (j + 1) % engineerTitles.length;
        showEngineer();
      }, 1000);
    }
  }
  typeTitle();
}

window.onload = () => {
  showWords();
  showEngineer();
};
