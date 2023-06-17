const findStudentScoreByName = require("../src/main");
const expect = require("chai").expect;

const input = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

describe("findStudentScoreByName", () => {
    it("Function should return the Score associated with the Name.", () => {

          const expected = 9.2; 
          const actual = findStudentScoreByName(input, "Natalee Vargas");
          expect(actual).to.equal(expected); 
    });
});

describe("findStudentScoreByName", () => {
    it("Function should return Null if the given name is not in the array.", () => {
        const expected = null; 
        const actual = findStudentScoreByName(input, "Terry Peters");
        expect(actual).to.equal(expected); 
    });
});

