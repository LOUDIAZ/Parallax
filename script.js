const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDHT = canvas.widht = 1000;
const CANVAS_HEIGHT = canvas.height = 600;
let gameSpeed = 5;

const background = new Image();
background.src = "fondo2.png";

class Layer {
    constructor(image, speedModifier) {
        this.x= 0;
        this.y= 0;
        this.widht = 1000;
        this.height = 600;
        this.image =image ;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        if (this.x <= -this.widht){
            this.x = 0;
        }
        this.x = Math.floor(this.x - this.speed);
        
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.widht, this.height);
        ctx.drawImage(this.image, this.x + this.widht, this.y, this.widht, this.height);
    }
}
const layer1 = new Layer (background, 0.2 );

function animate(){
    ctx.clearRect(0, 0 , CANVAS_WIDHT, CANVAS_HEIGHT);
    layer1.update();
    layer1.draw();
    requestAnimationFrame(animate);
};
animate();