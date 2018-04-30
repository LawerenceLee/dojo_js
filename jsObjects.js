let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

printStuCohort = arr => {
    for (let x=0; x<arr.length; x++) {
        console.log(`Name: ${arr[x].name}, chort: ${arr[x].cohort}`);
    };
};

// printStuCohort(students);


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


printUsers = obj => {
    for (key in obj) {
        console.log(key.toUpperCase())
        for (let x=0; x<obj[key].length; x++) {
            console.log(`${x+1} - ${obj[key][x].last_name}, ${obj[key][x].first_name} - ${obj[key][x].first_name.length+obj[key][x].last_name.length}`.toUpperCase())
        }
    }
}
            
// printUsers(users)
