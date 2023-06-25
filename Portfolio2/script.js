// Generate random positions for stars
function generateStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 250;
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star' + (i % 3));
      star.style.top = getRandomPosition() + 'vh';
      star.style.left = getRandomPosition() + 'vw';
      starsContainer.appendChild(star);
    }
  }
  
  // Get random position between 0 and 100
  function getRandomPosition() {
    return Math.random() * 100;
  }

generateStars();

function sendMail() {
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("message").value;
    window.location.href = "mailto:dorashekhar1999@gmail.com?subject="+ subject +"&body=" + body;
}

Array.from(document.getElementsByClassName("glass-morphism")).forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.boxShadow = "5px 10px 20px cyan";
  })
  element.addEventListener("mouseout", () => {
    element.style.boxShadow = "none";
  })
})

Array.from(document.getElementsByTagName("h1")).forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.color = "cyan";
  })
  element.addEventListener("mouseout", () => {
    element.style.color = "white";
  })
})

Array.from(document.getElementsByClassName("nav-link")).forEach((element) => {
  element.addEventListener("click", () => {
    alert(`Moving to section: ${element.textContent} `)
  })
})

Array.from(document.getElementsByClassName("form-control")).forEach((element) => {
  element.addEventListener("focusin", () => {
    element.style.backgroundColor = "cyan";
  })
  element.addEventListener("focusout", () => {
    element.style.backgroundColor = "white";
  })
})
