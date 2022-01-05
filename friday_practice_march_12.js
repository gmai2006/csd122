`
student's grade
90 <= grade < 100 => A
80 <= gradle < 90 => B
.....
`
calculateStudentGrade = (pts) => {
    if (pts >= 90) return 'A';
    else if (pts >= 70 && pts < 80) return 'C';
    else if (pts >= 60 && pts < 70) return 'D';
    else if (pts >= 80 && pts < 90) return 'B';
    else return 'F';
}

console.log(calculateStudentGrade(89.9));

console.log(0.1 + 0.27 === 0.37);

