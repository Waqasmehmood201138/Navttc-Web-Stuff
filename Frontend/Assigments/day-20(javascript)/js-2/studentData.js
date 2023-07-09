

function getDetails() {
    
    let randomNumber = Math.floor( Math.random() * 2000)
    console.log(randomNumber)

    let studentName = document.getElementById('name').value;

    let islamyatMarks = document.getElementById('islamyat').value;
    let englishMarks = document.getElementById('english').value;
    let urduMarks = document.getElementById('urdu').value;
    let mathMarks = document.getElementById('math').value;
    let physicsMarks = document.getElementById('physics').value;
    let chemistryMarks = document.getElementById('chemistry').value;

    let im = parseInt(islamyatMarks)
    let em = parseInt(englishMarks)
    let um = parseInt(urduMarks)
    let mm = parseInt(mathMarks)
    let pm = parseInt(physicsMarks)
    let cm = parseInt(chemistryMarks)

    let total = 550
    let obtain = im + em + um + mm + pm + cm;
    let per = (obtain / total) * 100

    let fixed = per.toFixed(2);

    var rem;
    if(obtain > 250){

         rem = "Pass"
         
         
    }
    else{
        rem = "fail"
    }
    
    

    console.log(total)

    let cn = document.getElementById('output');
    cn.innerHTML = `                <table class="table">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th></th>
                     <th>Roll Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${studentName}</td>
                    <td></td>
                    <td>SZIC-${randomNumber}</td>
                  </tr>
                  <thead>
                    <tr>
                      <th>Subjects</th>
                      <th>Total Marks</th>
                      <th>Obtain Marks</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>Islamyat</td>
                    <td>50</td>
                    <td>${im}</td>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>100</td>
                    <td>${em}</td>
                  </tr>
                  <tr>
                    <td>Urdu</td>
                    <td>100</td>
                    <td>${um}</td>
                  </tr>
                  <tr>
                    <td>Mathematics</td>
                    <td>100</td>
                    <td>${mm}</td>
                  </tr>
                  <tr>
                    <td>Physics</td>
                    <td>100</td>
                    <td>${pm}</td>
                  </tr>
                  <tr>
                    <td>Chemistry</td>
                    <td>100</td>
                    <td>${cm}</td>
                  </tr>

                  <thead>
                    <tr>
                      <th>Total Marks</th>
                      <th>Obtain Marks</th>
                      <th>Percentage</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>550</td>
                    <td>${obtain}</td>
                    <td>${fixed}%</td>
                  </tr>

                  <thead>
                    <tr>
                      <th>Remarks</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tr>
                    <td>${rem}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  

                </tbody>
              </table>`

    return false
}

// const newDiv = document.createElement('div');
//     const unorder = document.createElement('ul');
//     const listItem = document.createElement('li')

// newDiv.appendChild(unorder)
//     unorder.appendChild(listItem)

//     document.body.append(newDiv)