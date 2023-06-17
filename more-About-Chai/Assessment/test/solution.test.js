const expect = require("chai").expect; 
const findStudentByName = require("../src/solution");

const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

describe("findStudentByName", () => {
    it("The findStudentByName function does not exist", () =>{
        expect(findStudentByName).to.be.an("function"); 
    });
});

describe("findStudentByName", () => {
    it("The findStudentByName function should return the entire student object for the given name", () => {
        const expected = students[2];
        const actual = findStudentByName(students, "Natalee Vargas");
        
        expect(actual).to.eql(expected);
    });
});

describe("findStudentByName", () => {
    it("The findStudentByName function should return null if the given name cannot be found in the students array", () => {
        const expected = null; 
        const actual = findStudentByName(students, "Jay Smith");

        expect(actual).to.eql(expected);
    });
});