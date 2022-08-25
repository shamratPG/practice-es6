class University {
    name;
    location;
    teachers;
    constructor(para1, para2, para3) {
        this.name = para1;
        this.location = para2;
        this.teachers = para3;
    }
}

const versity1 = new University('Dhaka University', 'Dhaka', ['Mr.Jabbar', 'Mr.Alom'])
console.log(versity1);