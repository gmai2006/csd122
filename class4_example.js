class Course {
  constructor(courseSessionId, courseName) {
    this.courseSessionId = courseSessionId;
    this.courseName = courseName;
  }
}

/**
 * studentId
 * studentName
 * an array of classes
 */
class Student {
  constructor(studentId, name, sessionIds) {
    this.studentId = studentId;
    this.name = name;
    this.sessionIds = sessionIds;
  }
}

/**
 * name
 * sessionIds
 */
class Teacher {
  constructor(id, name, sessionIds) {
    this.id = id;
    this.name = name;
    this.sessionIds = sessionIds;
  }
}

const courses = [new Course(1, 'JS'), new Course(2, 'SQL'), new Course(3, 'Java')];
const students = [new Student('1', 'Eric', [2,1]), new Student('2','Alpha', [1,3]), new Student('3', 'Beta', [3])];
const teachers = [new Teacher('5', 'Mandalorian', [1,2]), new Teacher('8','YodaBaby', [2]), new Teacher('9', 'JohnDoe', [3])];

const searchStudentsByTeacherId = (teachers, students, id) => {
  //get all the sessionIds by teach name
  const found = undefined;
  // for (teacher of teachers) {
  //   if (teacher.id === id) {
  //     found = teacher;
  //   }
  // }

  const matchedTeacher = teachers.filter((teacher) => teacher.id === id);

  if (matchedTeacher.length === 0) { 
    console.log(`Teacher Not found: id ${id}`);
    return;
  }
  const sessionIds = matchedTeacher[0].sessionIds;
  // const result1 = [];
  // for (const student of students) {
  //   for (const courseSessionId of sessionIds) {
  //     if(student.sessionIds.some((sessionId) => sessionId === courseSessionId)) {
  //       result1.push(student);
  //       break;
  //     }
  //   }
  // }
  // return result1;

  return students.filter((student) => {
    for (const courseSessionId of sessionIds) {
      if(student.sessionIds.some((sessionId) => sessionId === courseSessionId)) {
        return true;
      }
    }
    return false;
  });
}

console.log(searchStudentsByTeacherId(teachers, students, '5'));

