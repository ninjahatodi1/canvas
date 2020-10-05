const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');


console.log(canvas);



// canvas.addEventListener('mousemove', function(e)
// {
//   c.beginPath();
//   c.arc(e.offsetX, e.offsetY, 30, 0, 360, false);
//   c.strokeStyle =  `rgba(${Math.random() *255 },${Math.random() *255 } ,  ${Math.random() *255 }, 1)`;
//   c.stroke();
// });



// canvas.addEventListener('click', function (e) {
//   console.log(e);
//   c.fillStyle = `rgba(${Math.random() *255 },${Math.random() *255 } ,  ${Math.random() *255 }, 0.4)`;
//   c.fillRect(e.offsetX, e.offsetY, 100, 100);
//   c.beginPath();
//   c.moveTo(e.offsetX, e.offsetY+ 20);
//   c.lineTo(e.offsetX + 20, e.offsetX);
//   c.strokeStyle = 'blueviolet'
//   c.stroke();
// });

class Particles {

  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  draw() {

    c.fill();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 360, false);
    c.strokeStyle = 'orange';
    c.stroke();


  }

  update() {

    if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
      this.dx = -this.dx;
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
      this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;
    this.draw();

  }
  
}







let circleArray = [];

for(let i=0; i<10; i++)
{   
let  radius = 50;
let x = Math.random() * (window.innerWidth - radius * 2)+ radius;
y = Math.random() * (window.innerHeight - radius * 2)+ radius;
dx = (Math.random() - 0.9) * 5;
dy = (Math.random() - 0.9) * 5;
   circleArray.push(new Particles(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  // c.clearRect(0, 0, innerWidth, innerHeight);
  for( let i=0; i<circleArray.length; i++)
  {
      circleArray[i].update();
  }
}

animate();
