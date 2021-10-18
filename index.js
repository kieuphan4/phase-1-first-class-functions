/* function runFiveMiles() {
    console.log("Go for a five-mile run");
}
  
function liftWeights() {
    console.log("Pump iron");
}
  
function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}
function Monday() {
    exerciseRoutine(liftWeights);
}
  
function Tuesday() {
    exerciseRoutine(swimFortyLaps);
}
  
function Wednesday() {
    exerciseRoutine(runFiveMiles);
}
  
function Thursday() {
    exerciseRoutine(liftWeights);
}
  
function Friday() {
    exerciseRoutine(swimFortyLaps);
}
*/

function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return function named() {
    }
};

function returnsAnAnonymousFunction() {
    return function() {
    }
}

