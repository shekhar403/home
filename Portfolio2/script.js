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
  