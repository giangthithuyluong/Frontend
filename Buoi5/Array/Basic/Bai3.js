const persons = [
    {firstname: "Dao", lastname: "Van Anh"},
    {firstname: "Tran", lastname: "Huy"},
    {firstname: "Le", lastname: "Hoang"}
];

//a
var newPersons = [];

persons.push({firstname: "Luong", lastname: "Giang"});

//b
var i = persons.findIndex(({firstname, lastname}) => firstname == "Tran" && lastname == "Huy");
persons.splice(i, 1, {firstname: "Nguyen", lastname: "Hoang"});
//c
newPersons = persons.map(value => {
    return {firstname: value.firstname, lastname: value.lastname, address: "Ha Noi"};
})
console.log(newPersons)