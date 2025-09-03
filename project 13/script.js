console.log("helloo")
//variables
let showDate = document.getElementById("selecteddate")
let showDays = document.getElementById("selecteddays")

//main function
function checkDates(){
    //variables
    let userMonth = Number(document.getElementById("month").value)
    let userYear = Number(document.getElementById("year").value)
    //validate input -> find right days and show results
    
    if(validateUserInput(userMonth, userYear)){
        let result = findRightDays(userMonth, userYear);
        showResults(result);
    };
    
}

//helper functions
//validate input
function validateUserInput(userMonth, userYear){
    if(userMonth<=12 && userMonth>0){
        if(userYear<0){
            true;
        } else{false;}
    } else{false;}
}

//find right days
function findRightDays(userMonth, userYear){
    let howManyDays = new Date(userYear, userMonth, 0);
    return howManyDays;
}

//show results
function showResults(result, userMonth, userYear){
    
        const unordedList = document.createElement("ul");
        for (let day=0; day<=result; day++){
        const listItem = document.createElement("li");
        listItem.textContent = day;
        unordedList.appendChild(listItem);
        }
    showDays.appendChild(unordedList);    
    showDate.textContent = `You chose month: ${userMonth} and year: ${userYear}`;
}