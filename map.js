const members = ['Abul', 'Kuddus', 'Kalam', 'Halim']
const memberNameLength = members.map(member => member.length);
console.log(memberNameLength);

const students = [
    { name: 'Alim', class: 'Six', goodGrades: true },
    { name: 'Sadik', class: 'five', goodGrades: false },
    { name: 'Robiul', class: 'four', goodGrades: true },
]

const studentNames = students.map(item => item.name);
const studentClass = students.map(item => item.class);
const studentGrades = students.map(item => item.goodGrades);
console.log(studentNames, studentClass, studentGrades)