
largura = 600
altura = 600


var r0 = 250


var x0 = largura/2
var y0 = altura/2
var x = x0-r0/2
var y = y0


var dt = 0.001

var tempo = 0

//classe partícula
particle=(x,y,w,c)=>{
  
  return{"x":x ,"y":y , "w":w , "color":c,"theta":0  ,
  
  draw_particle(){
    
    fill(c)
    circle(this.x,this.y,10)
  },
  
  //iteração das equações diferenciais de movimento circular uniforme
  mover(r){
    
    this.theta = this.theta + dt*this.w
    this.x =  this.x + r*dt*this.w*sin(this.theta) 
    this.y =  this.y - r*dt*this.w*cos(this.theta)
//a posição da partícula é r = P0 + r0*(cos(theta)*i + sen(theta)*J)
//Derivando obtemos as equações diferenciais de movimento
// v = r0(-sen(theta)*i + cos(theta)*j)
//dx/dt = -r0*sen(theta)*dtheta/dt, onde d(theta)/dt = w (constante)
  }
         
      }
  
}



function setup() {
  createCanvas(largura, altura);
}

particula = particle(x,y,10,"rgb(40,80,253)")


function draw() {
  
  background(220);
  
  
  noFill()
  circle(x0,y0,r0)
  particula.draw_particle();
  particula.mover(r0/2)
  
  tempo = tempo + dt
  
  
}