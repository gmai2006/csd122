class Course {
  constructor(courseSessionId, courseName) {
    this.courseSessionId = courseSessionId;
    this.courseName = courseName;
  }
}

let course1 = new Course("1", "Math");
let course2 = new Course("2", "Chess");
let course3 = new Course("3", "Craft");
let course4 = new Course("4", "Logic");
let course5 = new Course("5", "Cooking");

courses = [course1, course2, course3, course4, course5]
index = courses
.map(course => course.courseSessionId)
.indexOf("4");

console.log(index);