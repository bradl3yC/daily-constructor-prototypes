//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (color, status, hungry) {
  this.color = color
  this.status = status
  this.hungry = false
  this.owner = undefined
};

let sadie = new Dog("black", "normal", false);
let moonshine = new Dog();
moonshine.hungry = true;
let atticus = new Dog();

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human () {
  this.cool = false;
}

Human.prototype.pet = function(dog){
  dog.status = "happy"
}

Human.prototype.feed = function(dog){
  dog.hungry = false
}

let mason = new Human()
let julia = new Human()
julia.cool = true

// Instances of Human
// Needed: mason, julia
