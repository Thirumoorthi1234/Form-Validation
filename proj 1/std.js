let totalMarks = 0;

function addStudentData(name, gender, physics, maths, english) {
    let tableBody = document.querySelector('#studentTable tbody');

    let row = document.createElement("tr");


    let nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);

    let genderCell = document.createElement('td');
    genderCell.textContent = gender;
    row.appendChild(genderCell);

    let physicsCell = document.createElement('td');
    physicsCell.textContent = physics;
    row.appendChild(physicsCell);

    let mathsCell = document.createElement('td');
    mathsCell.textContent = maths;
    row.appendChild(mathsCell);

    let englishCell = document.createElement('td');
    englishCell.textContent = english;
    row.appendChild(englishCell);


    let total = parseInt(physics) + parseInt(maths) + parseInt(english);

    let totalCell = document.createElement('td');
    totalCell.textContent = total;
    row.appendChild(totalCell);


    tableBody.appendChild(row);


    console.log({name,gender,physics,maths,english,total});
}

    document.getElementById('studentForm').addEventListener('submit', function (event) {
        event.preventDefault(); 

        
        let name = document.getElementById('name').value;
        let gender = document.getElementById('gender').value;
        let physics = document.getElementById('physics').value;
        let maths = document.getElementById('maths').value;
        let english = document.getElementById('english').value;
        // console.log({name, gender, physics, maths, english, total});

        
        addStudentData(name, gender, physics, maths, english);

    
        document.getElementById('name').value = '';
        document.getElementById('gender').value = '';
        document.getElementById('physics').value = '';
        document.getElementById('maths').value = '';
        document.getElementById('english').value = '';
    });





