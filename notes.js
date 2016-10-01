let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//Create a Pixi scene and renderer and add the 
//renderer.view to the DOM
let scene = new Container(),
    renderer = autoDetectRenderer(500, 500);
document.body.appendChild(renderer.view);

//load an image and run the `setup` function when it's done
loader
  .add("images/froggerimage.png")
  .add("images/car.png")
  .load(setup);

function setup() {
    function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

  //Create the `frog` sprite, add it to the scene, and render it
  let frog = new Sprite(resources["images/froggerimage.png"].texture); 
  let car = new Sprite(resources["images/car.png"].texture); 

  for (i = 0; i < 10; i++){
      
  }
  //Change the sprite's position
  frog.x = 245;
  frog.y = 470;
  frog.vx = 0;
  frog.vy = 0;

  car.x = 0;
  car.y = 10;

  car.width= 90;
  car.height = 60;
  
  frog.width = 30;
  frog.height = 35;



  //Capture the keyboard arrow keys
  var left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40);

  //Left arrow key `press` method
  left.press = function() {

    //Change the frog's velocity when the key is pressed
    frog.vx = -5;
    frog.vy = 0;
  };

  //Left arrow key `release` method
  left.release = function() {

    //If the left arrow has been released, and the right arrow isn't down,
    //and the frog isn't moving vertically:
    //Stop the frog
    if (!right.isDown && frog.vy === 0) {
      frog.vx = 0;
    }
  };

  //Up
  up.press = function() {
    frog.vy = -5;
    frog.vx = 0;
  };
  up.release = function() {
    if (!down.isDown && frog.vx === 0) {
      frog.vy = 0;
    }
  };

  //Right
  right.press = function() {
    frog.vx = 5;
    frog.vy = 0;
  };
  right.release = function() {
    if (!left.isDown && frog.vy === 0) {
      frog.vx = 0;
    }
  };

  //Down
  down.press = function() {
    frog.vy = 5;
    frog.vx = 0;
  };
  down.release = function() {
    if (!up.isDown && frog.vx === 0) {
      frog.vy = 0;
    }
  };
 
  //Set the game state
  
  
  scene.addChild(car);
  scene.addChild(frog);
  renderer.render(scene);

function play() {

  //Use the frog's velocity to make it move
  frog.x += frog.vx;
  frog.y += frog.vy
  car.x += -5
}
state = play;
  //Start the game loop
  function gameLoop() {
  requestAnimationFrame(gameLoop);
  
  state();
  renderer.render(scene);
}
  gameLoop();
  
}



// COLLISION DETECTION
isIntersecting = function(r1, r2) {

return !(r2.x > (r1.x + r1.width) || 

           (r2.x + r2.width) < r1.x || 

           r2.y > (r1.y + r1.height) ||

           (r2.y + r2.height) < r1.y);

}