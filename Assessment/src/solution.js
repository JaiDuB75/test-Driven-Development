function partitionStudentsByScore(students, score){
    result = [];
    let groupA = [];
    let groupB = []; 
    students.forEach((student) => {
        if(student.score <= score){
            groupA.push(student); 
            console.log(groupA);
        }else{
            groupB.push(student);
            console.log(groupB); 
        }
    });
    result.push(groupA, groupB);
    console.log(result);

    return result; 
}

module.exports = partitionStudentsByScore; 