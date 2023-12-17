var myGamePiece;
var titolo;
var musica;
var moneta = [];
var monetap;

function startGame() {
    myGamePiece = new component(0,0, "img/m1.png", 0, 0,"image");
    musica = new sound('musica/win.mp3');
    myBackground = new component(2000, 1000, "img/win.png", 0, 0, "background");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 2000;
        this.canvas.height = 980;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.punti = 0;
        this.vitaMario=100;
        this.monetar = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

setInterval(costume,10);


function costume(){
num=Math.floor((Math.random() * 5) + 1);

if(num==3){
    myGamePiece.image.src="img/m1.png";
}
if(num==4){
    myGamePiece.image.src="img/m2.png";
}

if (myGameArea.keys && myGameArea.keys[37]) {
    num = Math.floor((Math.random() * 2) + 5); // Genera solo 5 o 6 a caso
    if (num == 5) {
        myGamePiece.image.src = "img/m7.png"; // Cambia l'immagine a m5.png quando va a sinistra
    } else if (num == 6) {
        myGamePiece.image.src = "img/m6.png"; // Cambia l'immagine a m6.png quando va a sinistra
    }
}


 if (myGameArea.keys && myGameArea.keys[32]) {
      suono.play();
        if(num==1){
            myGamePiece.image.src="img/m3.png";
        }
        if(num==2){
            myGamePiece.image.src="img/m4.png";
        }
        if(num==3){
            myGamePiece.image.src="img/m5.png";
        }

            if(num==4){
                myGamePiece.image.src="img/m8.png";
            }
            if(num==5){
                myGamePiece.image.src="img/m9.png";
            }
            if(num==6){
                myGamePiece.image.src="img/m10.png";
            }
        }
    }


function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
           
        }
        
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
   
        }
    
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
                this.image.src = color;
        if (type == "background") {
            ctx.drawImage(this.image, 
                this.x + this.width, 
                this.y,
                this.width, this.height);
        }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
  
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    
    }    

    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
           
        }
        return crash;
 
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGameArea.frameNo += 1;
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;    
    myBackground.speedX = 0;
    myBackground.newPos();    
    myBackground.update();
    musica.play();
    myGamePiece.newPos();
    myGamePiece.update();
    titolo.newPos();
    titolo.update();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
 
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;

}

