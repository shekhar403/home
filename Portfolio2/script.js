// Generate random positions for stars
function generateStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 250;
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star' + (i % 3));
      star.style.top = getRandomVerticalPosition() + 'vh';
      star.style.left = getRandomHorizontalPosition() + 'vw';
      starsContainer.appendChild(star);
    }
  }
  
  // Get random position between 0 and 100
  function getRandomVerticalPosition() {
    return Math.random() * 100;
  }
  
  function getRandomHorizontalPosition() {
    return Math.random() * 100;
  }

  // Generate stars on page load
//   window.addEventListener('load', generateStars);

generateStars();

function sendMail() {
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("message").value;
    window.location.href = "mailto:dorashekhar1999@gmail.com?subject="+ subject +"&body=" + body;
}
  