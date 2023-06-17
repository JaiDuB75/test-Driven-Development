const findLowestScoringStudent = require("../src/solution");

const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

describe("findLowestScoringStudent", () => {
    it("Should return the student object with the lowest score", () => {
        const expected = { name: "Morgan Sutton", score: 7.4 };
        const actual = findLowestScoringStudent(students);
        
        expect(actual).toEqual(expected);
    });

    test("Should return null if an empty array is passed in", () => {
        const expected = null;
        const actual = findLowestScoringStudent([])

        expect(actual).toEqual(expected);
    });
});