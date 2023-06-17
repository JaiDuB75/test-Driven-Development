function findLowestScoringStudent(students){
    if (students.length === 0){
        return null; 
    }

    let currentStudent = students[0];
    students.forEach((student) => {
        if(student.score < currentStudent.score){
            currentStudent = student;
        }
    });

    console.log(currentStudent); 
    return currentStudent;
}

module.exports = findLowestScoringStudent; 