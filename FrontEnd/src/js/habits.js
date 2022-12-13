const serverPath = `http://localhost:3000`;

const habitButton = document.getElementById("addHabitBtn")

var list1 = [], list2 = [], list3 = [], list4 = [], list5 = [];

var n = 1, x = 0;

function calcProg(goal_freq,cum_freq){
    let n = (1-((goal_freq-cum_freq)/goal_freq))*100;
    return n;
}
let progVal = 0
function AddRow(){

    var AddRown = document.getElementById('habitTable');
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("habit").value;
    list2[x] = document.getElementById("frequency").value;
    list3[x] = document.getElementById("units").value;
    list4[x] = document.getElementById("time").value;
    list5[x];

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);
    var cel7 = NewRow.insertCell(6);

    let progFreqId = `freqid${x}`
    let progRowId = `rowid${x}`

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = `<div id = "progress${x}">
                      <progress id="progressBar${x}" value="${progVal}" max="100"></progress>
                      </div>
                      <span id="progText${x}"></span><br>`
                    //   <span id="progPercText${x}">${progPercVal}%</span>
    cel6.innerHTML = `<td><button data-bs-toggle="modal" data-bs-target="#editHabitModal" id = "editBtn">Edit</button></td>
                      `;
    cel7.innerHTML = `<tr><button class = "deleteBtn">Delete</button></tr>`
    cel5.setAttribute('id', progRowId)
    // let progRow = document.getElementById(`progText0`).innerHTML
    // let freqG = document.getElementById(`freqid0`)
    editHabit(frequency.value,x)

    const tableEl = document.querySelector("#habitTable")
    function onDeleteRow (e) {
        if (!e.target.classList.contains('deleteBtn')){
            return;
        }
        const btn = e.target;
        btn.closest("tr").remove();
    }
    tableEl.addEventListener("click", onDeleteRow);
    n++; x++;
} //AddRow function ends

function editHabit(g,x){
    let editBtn = document.getElementById('editHabitSubmit')
    editBtn.addEventListener('click', (f) => {
        f.preventDefault()
        let q = document.getElementById('editHabitText').value
        let result = calcProg(g,q)
        console.log("g :"+ g)
        console.log("q: " + q)
        document.getElementById(`progressBar${x}`).value += result
        let progressText = document.getElementById(`progText${x}`)
        console.log(`progressBar${x}`)
        progVal += Math.round(result);
        if(progVal > 100){
            result = Math.abs(100-progVal);
            progressText.innerHTML = `You surpassed your goal by ${result}%`
            progVal = 100
            
        }
        else{
            progressText.innerHTML = progVal + "%"
            console.log("progval: "+progVal)
            console.log("result: "+result)
        }
        
    })
}
habitButton.addEventListener("click",AddRow);

const logoutBtn = document.getElementById('logoutbtn')
logoutBtn.addEventListener('click', () => {
    window.location.href = "index.html"
    localStorage.clear();
})


let greeting = document.getElementById('showUsername')


greeting.innerHTML = `Hello ${localStorage.getItem('username')}!`
console.log(localStorage.getItem('username')) 

    
