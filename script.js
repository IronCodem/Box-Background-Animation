console.log("ENJOY!")
const colors = [
  '#2196f3',
  '#e91e63',
  '#ffeb3b',
  '#74ff1d'
]

function createCircle(){
  const section = document.querySelector('section');
  const circle = document.createElement('span');

  var size = Math.random() * 50;

  circle.style.width = 20 + size + 'px';
  circle.style.height = 20 + size + 'px';

  circle.style.top = Math.random() * innerHeight + 'px';
  circle.style.left = Math.random() * innerWidth + 'px';
  
  const bg = colors[Math.floor(Math.random() * colors.length)];

  circle.style.background = bg;
  
  section.appendChild(circle);

  setTimeout(() =>{
    circle.remove()
  },5000)
}

setInterval(createCircle, 150)
