
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
    .add("images/car1.png")
    .add("images/car2.png")
    .add("images/car3.png")
    .add("images/car4.png")
    .add("images/car5.png")
    .add("images/car6.png")
    .add("images/car7.png")
    .add("images/car8.png")
    .add("images/car9.png")
    .add("images/car10.png")
    .add("images/froggerimage.png")

    .load(setup);

function setup() {

    let car1 = new Sprite(resources["images/car1.png"].texture);
    let car2 = new Sprite(resources["images/car2.png"].texture);
    let car3 = new Sprite(resources["images/car3.png"].texture);
    let car4 = new Sprite(resources["images/car4.png"].texture);
    let car5 = new Sprite(resources["images/car5.png"].texture);
    let car6 = new Sprite(resources["images/car6.png"].texture);
    let car7 = new Sprite(resources["images/car7.png"].texture);
    let car8 = new Sprite(resources["images/car8.png"].texture);
    let car9 = new Sprite(resources["images/car9.png"].texture);
    let car10 = new Sprite(resources["images/car10.png"].texture);
    let frog = new Sprite(resources["images/froggerimage.png"].texture);

    function keyboard(keyCode) {
        var key = {};
        key.code = keyCode;
        key.isDown = false;
        key.isUp = true;
        key.press = undefined;
        key.release = undefined;
        //The `downHandler`
        key.downHandler = function (event) {
            if (event.keyCode === key.code) {
                if (key.isUp && key.press) key.press();
                key.isDown = true;
                key.isUp = false;
            }
            event.preventDefault();
        };

        //The `upHandler`
        key.upHandler = function (event) {
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



    for (i = 0; i < 10; i++) {

    }
    //Change the sprite's position
    frog.x = 245;
    frog.y = 470;
    frog.vx = 0;
    frog.vy = 0;





    //Capture the keyboard arrow keys
    var left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    //Left arrow key `press` method
    left.press = function () {

        //Change the frog's velocity when the key is pressed
        frog.vx = -5;
        frog.vy = 0;
    };

    //Left arrow key `release` method
    left.release = function () {

        //If the left arrow has been released, and the right arrow isn't down,
        //and the frog isn't moving vertically:
        //Stop the frog
        if (!right.isDown && frog.vy === 0) {
            frog.vx = 0;
        }
    };

    //Up
    up.press = function () {
        frog.vy = -5;
        frog.vx = 0;
    };
    up.release = function () {
        if (!down.isDown && frog.vx === 0) {
            frog.vy = 0;
        }
    };

    //Right
    right.press = function () {
        frog.vx = 5;
        frog.vy = 0;
    };
    right.release = function () {
        if (!left.isDown && frog.vy === 0) {
            frog.vx = 0;
        }
    };

    //Down
    down.press = function () {
        frog.vy = 5;
        frog.vx = 0;
    };
    down.release = function () {
        if (!up.isDown && frog.vx === 0) {
            frog.vy = 0;
        }
    };

    frog.x = 230;
    frog.y = 470;
    frog.width = 20;
    frog.height = 20;

    car1.x = 400;
    car1.y = Math.floor((Math.random() * 400), 1);
    car1.width = 90;
    car1.height = 60;

    car2.x = 400;
    car2.y = Math.floor((Math.random() * 400), 1);
    car2.width = 90;
    car2.height = 60;

    car3.x = 400;
    car3.y = Math.floor((Math.random() * 400), 1);
    car3.width = 90;
    car3.height = 60;

    car4.x = 400;
    car4.y = Math.floor((Math.random() * 400), 1);
    car4.width = 90;
    car4.height = 60;

    car5.x = 400;
    car5.y = Math.floor((Math.random() * 400), 1);
    car5.width = 90;
    car5.height = 60;

    car6.x = 400;
    car6.y = Math.floor((Math.random() * 400), 1);
    car6.width = 90;
    car6.height = 60;

    car7.x = 400;
    car7.y = Math.floor((Math.random() * 400), 1);
    car7.width = 90;
    car7.height = 60;

    car8.x = 400;
    car8.y = Math.floor((Math.random() * 400), 1);
    car8.width = 90;
    car8.height = 60;

    car9.x = 400;
    car9.y = Math.floor((Math.random() * 400), 1);
    car9.width = 90;
    car9.height = 60;

    car10.x = 400;
    car10.y = Math.floor((Math.random() * 400), 1);
    car10.width = 90;
    car10.height = 60;


    scene.addChild(car1);
    scene.addChild(car2);
    scene.addChild(car3);
    scene.addChild(car4);
    scene.addChild(car5);
    scene.addChild(car6);
    scene.addChild(car7);
    scene.addChild(car8);
    scene.addChild(car9);
    scene.addChild(car10);
    scene.addChild(frog);

    renderer.render(scene);

    function play() {
        frog.x += frog.vx;
        frog.y += frog.vy
        let carxar = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10]

        for (let i = 0; i < carxar.length; i++) {
            if (carxar[i].x <= 0) {
                carxar[i].x = 400;
            } else {
                carxar[0].x += -.4
                carxar[1].x += -.8
                carxar[2].x += -.5
                carxar[3].x += -.3
                carxar[4].x += -.9
                carxar[5].x += -.4
                carxar[6].x += -.8
                carxar[7].x += -.2
                carxar[8].x += -.59
                carxar[9].x += -.79


            }
        }

    }
    state = play;

    function gameLoop() {
        requestAnimationFrame(gameLoop);

        state();
        renderer.render(scene);
    }
    gameLoop();
}