/*
 * https://dannyfritz.wordpress.com/2014/10/11/class-free-object-oriented-programming/#comment-58
 * Title: Class Free Object Oriented Programming
 * Sample code below by jpadamsonline on 2017-04-15.
 *
 */
/***** Class Animal *****/
function newAnimal(spec = {}){
  let { name = 'it', word = 'nothing' } = spec,
    talk = () => console.log( name + ' says ' + word);
  return Object.freeze({ name, word, talk });
}

/***** Class AnimalMovement *****/
function newAnimalMovement(spec = {}) {
  let { name = 'it' } = spec,
    fly = () => console.log(name + ' is flying: flap flap'),
    swim = () => console.log(name + ' is swimming: splish splash'),
    walk = () => console.log(name + ' is walking: stomp stomp');
  return Object.freeze({ fly, swim, walk });
}

/***** Class Alligator *****/
function newAlligator(spec){
  let { name, word, talk } = newAnimal(spec),
    { walk, swim } = newAnimalMovement(spec);
  return Object.freeze({ name, word, talk, walk, swim });
}

/***** Class Duck *****/
function newDuck(spec = {}){
  // overide defaults
  let { name = 'duck', word = 'quack' } = spec ,
    { talk } = newAnimal({ name, word }),
    { fly, walk, swim } = newAnimalMovement({ name });
  return Object.freeze({ name, word, talk, fly, walk, swim });
}

/***** Main *****/
let typicalGator = newAlligator({ name: 'alligator', word: 'grrrr' });
typicalGator.talk();
typicalGator.swim();

let noNameMuteGator = newAlligator();
noNameMuteGator.talk();
noNameMuteGator.walk();

let duck = newDuck();
duck.talk();
duck.fly();

let donald = newDuck({name: 'Donald', word: 'qua qua quaaack'});
donald.talk();
duck.swim();
