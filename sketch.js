var ground, xseria, p5duros, tiro
var batata; batata2
var tiros;
    function preload(){

      cup = loadImage('cup.png');
      batataImg = loadImage('chef1.png');
      fundo = loadImage('1069914.jpg');
      batatatack = loadImage('chef.png');
      terraImg = loadImage('terra.png');
    }

    function setup() {

      createCanvas(windowWidth, windowHeight);

      // x-box
      batata = createSprite(1200,474,80,80);
      //batata.addImage('potato',batatatack);
      batata.addImage('batata',batataImg);

      
      batata.scale = 1;

      // ps5
      cuph = createSprite(300,588,80,80);
      cuph.addImage(cup);
      cuph.scale = 0.55;

      ground = createSprite(250,700,300,10);
      ground.visible = true;
      tiros = new Group()
    }


  function draw() {
      image(fundo,0,0,width,height);
      showLife();
      showLife2()
    //pontuação
      fill("gold");
      textSize(20);
      text("PONTUAÇÃO: ", 120,80);

    // posição do mouse
      text(mouseX+","+mouseY, mouseX,mouseY);
    
    //título
      textFont("Snap ITC")
      textSize(50)
      text("MultIVersus",width/2-200,100)
    
    //movimento do xbox
        if(keyDown(RIGHT_ARROW)){
          cuph.x += 5;
        }

        if(keyDown(LEFT_ARROW)){
          cuph.x -= 5;
        }
        if (keyWentDown('shift')){
          cuph.velocityY -=10
        }
        cuph.velocityY = cuph.velocityY + 0.5
    // tiro ps5
        drawSprites();
        
        if (keyWentDown('space')){
          batata.remove()
          batata2 = createSprite(1270,474,80,80);
          batata2.addImage('potato',batatatack);
          batata2.scale = 0.5
        }

        cuph.collide(ground);
        tirobatata()

  }
  function tirobatata(){
    if(frameCount % 120===0){
      tiro = createSprite(1150,614,30,10);
      tiro.addImage(terraImg);
      tiro.scale = 0.8
      tiro.velocityX = -13;
      tiro.lifetime = 900
      tiro.depth = batata.depth;
      tiro.depth = tiro.depth + 1
      tiros.add(tiro)
    }
  }



  function showLife() {
    push();
    fill("white");
    rect(width / 2 - 100, height - 670, 185, 20);
    fill("#f50057");
    rect(width / 2 - 100, height - 670, 185, 20);
    noStroke();
    pop();
  }

  function showLife2() {
    push();
    fill("white");
    rect(width / 2 - 400, height - 670, 185, 20);
    fill("#f50057");
    rect(width / 2 - 400, height - 670, 185, 20);
    noStroke();
    pop();
  }