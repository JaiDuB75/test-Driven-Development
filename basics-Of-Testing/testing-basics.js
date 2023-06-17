//Step 1: Determine inputs, outputs, and the function name 
const scores = [
    {name: "John Doe", score: 9.4},
    {name: "Cory Thomas", score: 8.8}, 
];

//Step 2: Determine Happy Path
//  The highestScore function should return the name and score of the highest score when given an array of objects. 

//Step 3: Write the smallest Test Possible
if (typeof highestScore === "function"){
    console.log("Test Passed. HighestScore exists.");
} else {
    console.log("highestScore() is not a function or does not exists"); 
};

//Step 4: Write code that make the test pass 
//function highestScore(score){}

//Step 5: Repeat Step 3 and Step 4 until reaches happy path
function highestScore(scores){
    let result = null;
    let highestScore = 0; 

    for(let currentScore = 0; currentScore < scores.length; currentScore++){
        let student = scores[currentScore];
        if (student.score > highestScore){
            highestScore = student.score;
            result = student;
        }
    }

    return result;
}

const expected = scores[0]; 

const actual = highestScore(scores); 

if (expected.name === actual.name && expected.score === actual.score){
    console.log("Test Passed");
}else{
    console.log("Test Failed"); 
}