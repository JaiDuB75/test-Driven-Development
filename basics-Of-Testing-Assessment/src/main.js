function findStudentScoreByName(students, name){
    let result = null;
    students.forEach((student) => {
        if(student.name === name){
            result = student.score; 
        }; 
    });
    return result; 
};

module.exports = findStudentScoreByName; 