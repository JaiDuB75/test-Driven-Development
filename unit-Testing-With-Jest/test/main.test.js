const findHighestScoringStudent = require("../src/main");

const mathStudents = [
    { name: "Shane Carey", score: 9.5 },
    { name: "Catarina Lima", score: 9.7 },
    { name: "Rebecca Mills", score: 8.7 },
  ];

  describe("findHighestScoringStudent", () => {
    it("should return the student with the highest score", () => {
        // Steps for testing the function
      });

    test("should return the student with the highest score", () => {
      // Steps for testing the function
    });

    test("should return the student object", () => {
        const expected = {name: "Catarina Lima", score: 9.7};
        const actual = findHighestScoringStudent(mathStudents);

        expect(actual).toEqual(expected); 
    });
  });