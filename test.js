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