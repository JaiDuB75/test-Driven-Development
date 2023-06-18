const partitionStudentsByScore = require("../src/solution");
const expect = require("chai").expect; 

const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

describe("partitionStudentsByScore", () => {
    it("partitionStudentsByScore is a function", () => {
        expect(partitionStudentsByScore).to.be.an("function"); 
    });

    it("Students are correctly partitioned", () => {
        const expected = [
            [{ name: "Morgan Sutton", score: 7.4 }],
            [
              { name: "Leo Yeon-Joo", score: 8.9 },
              { name: "Natalee Vargas", score: 9.2 },
            ],
          ];
        const actual = partitionStudentsByScore(students, 8);
        expect(actual).to.eql(expected);
    });

    it("If the student list is empty, return an array of two arrays", () => {
        const expected = [[],[]];
        const actual = partitionStudentsByScore([], 8);

        expect(actual).to.eql(expected); 
    });

    it("Place all students in the first array if appropriate", () => {
        const expected = [[  { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },],
        []];
        const actual = partitionStudentsByScore(students, 10);

        expect(actual).to.eql(expected);
    });

    it("Place all students in the second array if appropriate.", () => {
        const expected = [[],
        [  { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
    ]];

        const actual = partitionStudentsByScore(students, 5); 

        expect(actual).to.eql(expected);

    });
}); 