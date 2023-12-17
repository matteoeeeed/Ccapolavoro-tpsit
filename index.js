var myGamePiece;
var imagine1;
var imagine2;
var imagine3;
var imagine4;
var imagine5;
var imagine6;
var imagine7;
var imagine8;
var imagine9;
var imagine10;
var testovita;
var testopunti;
var testopunti2;
var suono;
var suono1;
var suono2;
var suono3;
var suono4;
var suono5;
var suono6;
var suono7;
var suono8;
var musica;
var nemici1 = [];
var nemici2 = [];
var moneta = [];
var monetap;

function startGame() {
    myGamePiece = new component(100, 80, "img/m1.png", 64, 129,"image");
    monetap= new component(70, 70, "img/c1.png", 524, 1,"image");
    imagine1 = new component(170, 80, "img/g2.png", 64, 129,"image");
    imagine2 = new component(100, 80, "img/g3.png", 64, 129,"image");
    imagine3 = new component(100, 80, "img/g4.png", 64, 129,"image");
    imagine4 = new component(100, 80, "img/c1.png", 64, 129,"image");
    imagine5 = new component(100, 80, "img/c2.png", 64, 129,"image");
    imagine6 = new component(100, 80, "img/c3.png", 64, 129,"image");
    imagine7 = new component(100, 80, "img/c4.png", 64, 129,"image");
    imagine8 = new component(100, 80, "img/c5.png", 64, 129,"image");
    imagine9 = new component(100, 80, "img/c6.png", 64, 129,"image");
    imagine10 = new component(100, 80, "img/c7.png", 64, 129,"image");
    suono = new sound('musica/r.wav');
    suono1 = new sound('musica/c.wav');
    suono2 = new sound('musica/mg.wav');
    suono3 = new sound('musica/1.wav');
    suono4 = new sound('musica/2.wav');
    suono5 = new sound('musica/3.wav');
    suono6 = new sound('musica/d1.wav');
    suono7 = new sound('musica/d2.wav');
    suono8 = new sound('musica/d3.wav');
    musica = new sound('musica/m1.wav');
    testovita = new component('50px','Consolas','red',42,43,'text');
    testopunti = new component('50px','Consolas','black',1200,43,'text');
    testopunti2 = new component('50px','Consolas','black',620,43,'text');
    myBackground = new component(2000, 1200, "img/l1.gif", 0, 0, "background");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 2000;
        this.canvas.height = 960;
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
    myBackground.speedX = -8;
    myBackground.newPos();    
    myBackground.update();
    musica.play();
   
    if (myGameArea.keys && myGameArea.keys[37]){
        myGamePiece.speedX = -22;  
    }

    if (myGameArea.keys && myGameArea.keys[39]) {
        myGamePiece.speedX = 22;
    }

    if (myGameArea.keys && myGameArea.keys[38]) {
        myGamePiece.speedY = -20; 
    }
    
    if (myGameArea.keys && myGameArea.keys[40]) {
        myGamePiece.speedY = 20; 
    }
 
    if(myGamePiece.x>1980){
        myGamePiece.speedX = -22; 
    }
    if(myGamePiece.x<10){
        myGamePiece.speedX = 22; 
    }
    if(myGamePiece.y>970){
        myGamePiece.speedY = -22; 
    }
    if(myGamePiece.y<10){
        myGamePiece.speedY = 22; 
    }

    //zona clonazione
    if (myGameArea.frameNo == 1 || everyinterval(100)) {
        num=Math.floor(Math.random()*870)+10;
        x = myGameArea.canvas.width;
        y = myGameArea.canvas.height - num;
        nemici1.push(new component(120, 140, "img/g1.png", x, y, "image"));
    }

    if (myGameArea.frameNo == 1 || everyinterval(100)) {
        num=Math.floor(Math.random()*870)+10;
        x = myGameArea.canvas.width - 2300;
        y = myGameArea.canvas.height - num;
        nemici2.push(new component(120, 140, "img/g3.png", x, y, "image"));
    }

    if (myGameArea.frameNo == 1 || everyinterval(50)) {
        num=Math.floor(Math.random()*870)+10;
        x = myGameArea.canvas.width ;
        y = myGameArea.canvas.height - num;
        moneta.push(new component(70, 70, "img/c3.png", x, y, "image"));
    }

    for (i = 0; i < nemici1.length; i += 1) {
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici1[i].image.src = "img/g1.png";
        } 
        if (n == 2) {
            nemici1[i].image.src = "img/g2.png";
        } 
        nemici1[i].x += -3;
        nemici1[i].update();
        if (myGamePiece.crashWith(nemici1[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
            if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici1.splice(i, 1);
            i--; 
            suono2.play();
            }else{
                let n2 = Math.floor(Math.random() * 2) + 1;
                myGameArea.vitaMario -= 1;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }
    }

    for (i = 0; i < nemici2.length; i += 1) {
        let n = Math.floor(Math.random() * 2) + 1;
        if (n == 1) {
            nemici2[i].image.src = "img/g3.png";
        } 
        if (n == 2) {
            nemici2[i].image.src = "img/g4.png";
        } 
        nemici2[i].x += 3;
        nemici2[i].update();
        if (myGamePiece.crashWith(nemici2[i])) {
            let n2 = Math.floor(Math.random() * 2) + 1;
            if (myGameArea.keys && myGameArea.keys[32]) {
            myGameArea.punti +=100;
                if(n2==1){
                suono6.play();
                }
                if(n2==2){
                suono7.play();
                }
                if(n2==3){
                suono8.play();
                }
            nemici2.splice(i, 1);
            i--; 
            suono2.play();
            }else{
                
                myGameArea.vitaMario -= 1;
                if(n2==1){
                suono3.play();
                }
                if(n2==2){
                suono4.play();
                }
                if(n2==3){
                suono5.play();
                }
            }
        }
    }
    
    for (i = 0; i < moneta.length; i += 1) {
        let n = Math.floor(Math.random() * 7) + 1;
        if (n == 1) {
            moneta[i].image.src = "img/c1.png";
        } 
        if (n == 2) {
            moneta[i].image.src = "img/c2.png";
        } 
        if (n == 3) {
            moneta[i].image.src = "img/c3.png";
        } 
        if (n == 4) {
            moneta[i].image.src = "img/c4.png";
        } 
        if (n == 5) {
            moneta[i].image.src = "img/c5.png";
        } 
    
        moneta[i].x += -3;
        moneta[i].update();

        if (myGamePiece.crashWith(moneta[i])) {
         myGameArea.monetar+=10;
         suono1.play();
         moneta.splice(i, 1);
         i--; 
        }
    }

    if(myGameArea.frameNo>2000){
        window.location.assign("WIN.html");
    }
    

    testovita.text="MARIO:"+myGameArea.vitaMario;
    testovita.update();
    testopunti.text="PUNTEGGIO:"+myGameArea.punti;
    testopunti.update();
    testopunti2.text="X:"+myGameArea.monetar;
    testopunti2.update();
    monetap.update();
    myGamePiece.newPos();
    myGamePiece.update();

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

