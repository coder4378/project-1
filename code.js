var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81a4f500-ad11-4009-8f0e-175b165af74b","11d5d9f0-6932-45de-ba25-6f4ac37fe9a9","7d58941f-a7d8-42da-85c6-3efa6131461a","0ff40bc3-0d63-4aa9-befe-02d279ad703b","7ba94b6c-b9f1-4cc2-b448-856413fc8172","42b7aa29-c5f8-44fe-9d49-8540deca9c13","e92d7a76-cb9d-426f-90f2-1f5356f539aa","efd3d37e-602d-4ef6-a92f-44fec91fa462","0ad793ce-16c4-4650-bcc4-2ceb86fce097","4ebf325b-4aae-45ec-8160-40d7ebbf3038"],"propsByKey":{"81a4f500-ad11-4009-8f0e-175b165af74b":{"name":"ball","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png","frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":4,"version":"mTMaCW8J4mp7PjJaqaEvg7TYYUiBi0o_","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png"},"11d5d9f0-6932-45de-ba25-6f4ac37fe9a9":{"name":"robot","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png","frameSize":{"x":77,"y":69},"frameCount":1,"looping":true,"frameDelay":4,"version":"tZ_IE_KLWjF4A1nkt2b_5qETXtRNsUrm","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":69},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png"},"7d58941f-a7d8-42da-85c6-3efa6131461a":{"name":"player","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png","frameSize":{"x":60,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"Ti_9GBkM6Pfj.OynL8DvfaRoc1S_OviN","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":91},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png"},"0ff40bc3-0d63-4aa9-befe-02d279ad703b":{"name":"TRICK1","sourceUrl":null,"frameSize":{"x":60,"y":91},"frameCount":2,"looping":true,"frameDelay":12,"version":"FBCuwoi9titKNIGhbDG1NlhbgjGwc9pH","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":91},"rootRelativePath":"assets/0ff40bc3-0d63-4aa9-befe-02d279ad703b.png"},"7ba94b6c-b9f1-4cc2-b448-856413fc8172":{"name":"TRICK1_copy_1","sourceUrl":null,"frameSize":{"x":60,"y":91},"frameCount":2,"looping":true,"frameDelay":12,"version":"ZKKrNr0r.FkjDCmKCtxTUSTh8WldGJs.","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":91},"rootRelativePath":"assets/7ba94b6c-b9f1-4cc2-b448-856413fc8172.png"},"42b7aa29-c5f8-44fe-9d49-8540deca9c13":{"name":"player_kick","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png","frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":4,"version":"muGaTH4sSusjC9_cnIagpE.A1jKl.IBf","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png"},"e92d7a76-cb9d-426f-90f2-1f5356f539aa":{"name":"player_fall","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png","frameSize":{"x":92,"y":51},"frameCount":1,"looping":true,"frameDelay":4,"version":"O9KVjN9486k4u64Yl1K0VUwa4XbeD3v3","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":51},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png"},"efd3d37e-602d-4ef6-a92f-44fec91fa462":{"name":"girlPlayer.png_1","sourceUrl":null,"frameSize":{"x":50,"y":85},"frameCount":1,"looping":true,"frameDelay":12,"version":"KBcFpbqyoBsTcGxi.ruXn9OvcKjFeyqJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":85},"rootRelativePath":"assets/efd3d37e-602d-4ef6-a92f-44fec91fa462.png"},"0ad793ce-16c4-4650-bcc4-2ceb86fce097":{"name":"girlPlayer_kick.png_1","sourceUrl":null,"frameSize":{"x":50,"y":76},"frameCount":1,"looping":true,"frameDelay":12,"version":"qLjE7ksl8F6_c82s2Gy_fAJxEU7o47l2","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":76},"rootRelativePath":"assets/0ad793ce-16c4-4650-bcc4-2ceb86fce097.png"},"4ebf325b-4aae-45ec-8160-40d7ebbf3038":{"name":"soccer","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":2,"looping":true,"frameDelay":45,"version":"0EuYAgkfuZAHXeLb58rrNaiWZM.QvjAN","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":800},"rootRelativePath":"assets/4ebf325b-4aae-45ec-8160-40d7ebbf3038.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create the ball, playerPaddle and computerPaddle as sprite obvar
var back = createSprite(200,200);
back.setAnimation("soccer");
var ball = createSprite(200,200,10,10);
ball.setAnimation("ball");

var playerPaddle = createSprite(370,200,10,70);
playerPaddle.setAnimation("player")
var computerPaddle = createSprite(35,200,10,70);
computerPaddle.setAnimation("robot")

//variable to store different state of game
var gameState = "serve";

//variables to keep the score
var compScore = 0;
var playerScore = 0;
textSize(12);
fill(255);
function draw() {
 
   
  //clear the screen
  background("white");
  
  if(ball.isTouching(computerPaddle) || ball.isTouching(playerPaddle)) {
   playSound("assets/hit.mp3");
  }
  if (keyDown("A")){
    playerPaddle.setAnimation("player_kick");
  }
  if (keyWentUp("A")){
    playerPaddle.setAnimation("player");
  }
  //place info text in the center
  
  //display scores
  
  //make the player paddle move with the mouse's y position
  playerPaddle.y = World.mouseY;
  
  //AI for the computer paddle
  //make it move with the ball's y position
  computerPaddle.y = ball.y;
  
  //draw line at the centre
 if (keyDown("S")) {
   playerPaddle.setAnimation("animation_1");
 }
  
  
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
 
  
  //serve the ball when space is pressed
  if (keyDown("space") &&  gameState === "serve") {
    serve();
    gameState = "play";
     playerPaddle.setAnimation("player");
  }
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 400 || ball.x <0) {
    playSound("assets/score.mp3");
    if(ball.x > 400) {
      compScore = compScore + 1;
      playerPaddle.setAnimation("player_fall"); 
    }
    
    if(ball.x < 0) {
      playerScore = playerScore + 1;
    }
    
    reset();
    gameState = "serve";
  }
  
 
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }
  if (ball.isTouching(topEdge)||ball.isTouching(bottomEdge)){
    playSound("assets/wall_hit.mp3");
  }
  drawSprites();
   text(compScore, 170,20);
  text(playerScore, 230,20);
 if (gameState === "serve") {
    text("Press Space to Serve",150,180);
   
 } 
  if (playerScore === 5 || compScore === 5){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
}

function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
