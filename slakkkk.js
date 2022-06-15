s2_img = loadAnimation('sordado - Copy (8).png');
s3_img = loadAnimation('sordado - Copy (7).png');
s4_img = loadAnimation('sordado - Copy (6).png');
s5_img = loadAnimation('sordado - Copy (5).png');
s6_img = loadAnimation('sordado - Copy (3).png');
s7_img = loadAnimation('sordado - Copy (4).png');
s8_img = loadAnimation('sordado - Copy (2).png');
s9_img = loadAnimation('sordado - Copy.png');
s10_img = loadAnimation('sordado - Copy (9).png');

s2 = createSprite(2300, height-150);
s2.addAnimation("s2",s2_img);
s2.scale = 0.5;

s3 = createSprite(2300, height-150);
s3.addAnimation("s3",s3_img);
s3.scale = 0.5;

s4 = createSprite(2300, height-150);
s4 = addAnimation("s4",s4_img);
s4.scale = 0.5;

s5 = createSprite(2300, height-150);
s5.addAnimation("s5",s5_img);
s5.scale = 0.5;

s6 = createSprite(2300, height-150);
s6.addAnimation("s6",s6_img);
s6.scale = 0.5;

s7 = createSprite(2300, height-150);
s7.addAnimation("s7",s7_img);
s7.scale = 0.5;

s8 = createSprite(2300, height-150);
s8.addAnimation("s8",s8_img);
s8.scale = 0.5;

s9 = createSprite(2300, height-150);
s9.addAnimation("s9",s9_img);
s9.scale = 0.5;

s10 = createSprite(2300, height-150);
s10.addAnimation("s10",s10_img);
s10.scale = 0.5;

s1.velocityX = -0.1;
s2.velocityX = -0.5;
s3.velocityX = 0.05;
s4.velocityX = -0.025;
s5.velocityX = -0.09;
s6.velocityX = -0.07;
s7.velocityX = 0.02;
s8.velocityX = 0.03;
s9.velocityX = -0.05;
s10.velocityX = 0.08;