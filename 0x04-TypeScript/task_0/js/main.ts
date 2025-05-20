interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Buike",
    lastName: "Nnaji",
    age: 25,
    location: "Nigeria"
};

const student2: Student = {
    firstName: "Ben",
    lastName: "Ranky",
    age: 26,
    location: "Nigeria"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

headerRow.innerHTML = "<th>First Name</th><th>Location</th>";
table.appendChild(headerRow);

studentsList.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td> ${student.firstName}</td><td> ${student.location}`;
    table.appendChild(row);
});

document.body.appendChild(table);
