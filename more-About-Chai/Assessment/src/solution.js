function findStudentByName(students, name){
    let result = null; 
    students.forEach((student) => {
        if(student.name === name){
            result = student;
        }
    });
    return result; 
}

module.exports = findStudentByName; 