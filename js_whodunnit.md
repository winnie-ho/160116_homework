#JS Day 1 Homework

Go through each sample code and work out what the output will be and explain what happened.

### Episode 1
```js
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

```ANSWER: It will print out "My name is Keith"



### Episode 2
```js
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

```ANSWER: It will print out: 3



### Episode 3
```js
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

```ANSWER: It will print out: 
0: Ducks
1: Dogs
2: Lions




### Episode 4

```js
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

```ANSWER: It will print out:
Suspects include: Jay, Val, Harvey, Rick
Suspect three is:Keith




### Episode 5

```js
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

```ANSWER: It will print out:
Poirot




### Episode 6
```js
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();

console.log('the murderer is ', murderer);

```ANSWER: It will print out:
the murderer is valerie

### Episode 7 - Make up your own episode/s!

Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

var suspects = []
var suspect1 = "Moriarty"
var suspect2 = "Mycroft"
var suspect3 = "Mary"
var suspect4 = "Molly Hooper"

function addSuspect(suspect){
  suspects.push(suspect);
}

addSuspect(suspect1);
addSuspect(suspect2);
addSuspect(suspect4);
suspects.pop(suspect1);
addSuspect(suspect3);

function whoDidIt (suspects){
  console.log ("Sherlock deduces that", suspects[1], "blew up Westminster");
}

whoDidIt(suspects);
