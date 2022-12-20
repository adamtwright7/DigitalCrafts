// write a function that assigns the task to the student based on user id, return all the results in an array

const students = [
    { name: "jessika", uid: 1 },
    { name: "vinny", uid: 2 },
    { name: "meg", uid: 3 },
    { name: "jaye", uid: 4 },
    { name: "corey", uid: 5 },
    { name: "adam", uid: 6 },
    { name: "rokhaya", uid: 7 },
    { name: "peter", uid: 8 },
    { name: "mauro", uid: 9 },
  ];
  
  const jobAssignments = [
    { taskName: "fix github issue 1322", uid: 9 },
    { taskName: "fix github issue 5666", uid: 8 },
    { taskName: "fix frontend issue 123121", uid: 7 },
    { taskName: "fix vscode issue 992223", uid: 6 },
    { taskName: "fix html issue layout", uid: 5 },
    { taskName: "fix dc issue 1323122", uid: 4 },
    { taskName: "fix backend issue 2", uid: 3 },
    { taskName: "fix github issue 130022", uid: 2 },
    { taskName: "fix github issue 444", uid: 1 },
    { taskName: "fix lunch", uid: 3 },
    { taskName: "fix breakfast", uid: 2 },
    { taskName: "fix dinner", uid: 1 },
  ];
  
const assignJobs = (students,jobAssignments) => {
    const newStudentAssignemnts = [] // initialize the output 
    for (const student of students){
        const studentObject = {} // create a new object for each student 
        // push the correct name and user ID into that object
        studentObject['name'] = student.name 
        studentObject['uid'] = student.uid

        // push the correct taskname into each student's object by finding the user ID in the jobAssignments array with a loop 
        studentObject['tasks'] = []
        for (const jobAssignment of jobAssignments){
            if (studentObject.uid === jobAssignment.uid){
                studentObject.tasks.push(jobAssignment)
            }
        }

        // push an "assignedTask = true" into each student's object
        studentObject['assignedTask'] = true

        // push the student object into the array
        newStudentAssignemnts.push(studentObject)  
    }
    return newStudentAssignemnts // return the output 
}

console.log(assignJobs(students,jobAssignments))

// expected output 
// const newStudentAssignemnts = [
//     {
//       name: "jessika",
//       uid: 1,
//       tasks: [
//         { taskName: "fix dinner", uid: 1 },
//         { taskName: "fix github issue 444", uid: 1 },
//       ],
//       assignedTask: true,
//     },
//   ];