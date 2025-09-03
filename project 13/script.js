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
        showResults(result, userMonth, userYear);
    };
    
}

//helper functions
//validate input
function validateUserInput(userMonth, userYear){
    if(userMonth<=12 && userMonth>0){
        if(userYear>0 && userYear<275760){
            return true;
        } else{return false;}
    } else{return false;}
}

//find right days
function findRightDays(userMonth, userYear){
    let rightDate = new Date(userYear, userMonth, 0);
    let howManyDays = rightDate.getDate();
    console.log(howManyDays);
    return howManyDays;
}

//show results
function showResults(result, userMonth, userYear){
        const unordedList = document.createElement("ul");
        for (let day=1; day<=result; day++){
        const listItem = document.createElement("li");
        listItem.textContent = day;
        unordedList.appendChild(listItem);
        }
    showDays.appendChild(unordedList);    
    showDate.textContent = `You chose month: ${userMonth} and year: ${userYear}`;
}