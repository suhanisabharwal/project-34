var dog,dogImg,dogImg1;
 var database; 
 var foodS,foodStock;
 foodS = 0

function preload()
{
dogImg = loadImage("images/dogImg.png");
dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg)
  dog.scale = 0.2;
  foodStock=database.ref('food'); 
  foodStock.on("value",readStock);


  
}


function draw() {  

  drawSprites();
  //add styles here
  textSize(30)
 text("food remaining" +foodS, 170, 200);
 if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
   dog.addImage(dogImg1); }

}

function readStock(data){ 
  foodS=data.val();
  console.log(foodS)
 }

 function writeStock(x){ 
   if(x<=0){ x=0; 
  }
  
  else{ 
    x=x-1;
   } 
   database.ref('/').update({ food:x }) }


