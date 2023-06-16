const averageScore = require("../src/main"); 
const expect = require("chai").expect;

describe("averageScore", () => {
    it("Should return the average score among all students", () => {
        const input = [
            {name: "John Doe", score: 9.5},
            {name: "Kevin Thomas", score: 8.8},
            {name: "Matt Ross", score: 9.9},  
        ];

        const expected = 9.4;
        const actual = averageScore(input);
        expect(actual).to.equal(expected); 
        
    });
});