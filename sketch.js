var bg_img, ethan_img, s1_img, s2_img, s3_img, s4_img, s5_img, s6_img, s7_img, s8_img, s9_img, s10_img;
var ethan;
var solo;
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
var bullet, gBullet,gBullet2;

function preload()
{
  bg_img = loadImage('background.jpg');
  ethan_img = loadImage( 'ethan.gif');
  s1_img = loadAnimation('sordado.png');
 
}

function setup() 
{
  createCanvas(3000, windowHeight);
 ethan = createSprite(100, height-150);
  ethan.addImage(ethan_img);
 gBullet = new Group();
 gBullet2 = new Group();
 ethan.scale = 0.5;
  solo = createSprite(width/2, height -24, width, 20);
  s1 = createSprite(2300, height-150);
  s1.addAnimation("s1",s1_img);
  s1.scale = 0.5;
 s1.velocityX = -0.4

}

function draw() 
{
  background(bg_img);

if (keyDown("space")&& ethan.y >= 700)
{
    ethan.velocityY = -12;
}
ethan.velocityY += 0.5;
ethan.collide(solo);
console.log(ethan.y)
 if (keyDown("A"))
 {
  ethan.x -= 10;
 }
  if (keyDown("D"))
  {
   ethan.x += 10;
 }

 if (keyDown("enter")){
  atirarethan();
 }
 atirarsoldado(s1);
  drawSprites();

}

function atirarethan()
{
if (frameCount%2==0)
{
  bullet = createSprite(ethan.x+119, ethan.y+52, 10, 10);
  bullet.shapeColor = "yellow"
  bullet.velocityX = 20;
  bullet.lifetime = 1000000;
  gBullet.add(bullet);
}
}


function atirarsoldado(soldado)
{
if (frameCount%30==0)
{
  bullet2 = createSprite(soldado.x-119, soldado.y+52, 10, 10);
  bullet2.shapeColor = "red"
  bullet2.velocityX = -10;
  bullet2.lifetime = 10000;
  gBullet2.add(bullet2);
}
}