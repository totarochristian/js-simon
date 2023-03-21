/**
 * Function that will generate a random int
 * @param {bigint} max Max value of the interval
 * @param {bigint} min Min value of the interval
 * @returns {bigint} Generated random int value
 */
function GetRandomInt(max,min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/** Function that will start the game */
function MainProgram(){
    let level = 1;
    let numToShow = 5;
    
    HideObjectById("start");
    StartShowNumbers(level,numToShow);
}

/** Function used to hide an object with a specific id */
function HideObjectById(id){
    document.getElementById(id).classList.add("d-none");
}
/** Function used to hide an object with a specific id */
function ShowObjectById(id){
    document.getElementById(id).classList.remove("d-none");
}

function StartShowNumbers(level,numToShow){
    //Add level and last number index to the relative html elements
    document.getElementById("level").innerText = level;
    document.getElementById("lastNumberIndex").innerText = numToShow;
    ShowObjectById("showNum");

    let arr = DefineRandomNumbers(numToShow,level);

    setTimeout(()=>{ShowSingleNum(1,arr,numToShow)},500);
}

function DefineRandomNumbers(numOfElems,level){
    let arr = [];
    for(let i=0; i<numOfElems; i++)
        arr[i] = GetRandomInt(level*10,1);
    return arr;
}

function ShowSingleNum(index,arr,max){
    document.getElementById("currentNumberIndex").innerText = index;
    document.getElementById("number").innerText = arr[index-1];
    ShowObjectById("number");
    setTimeout(() => {
         HideObjectById("number");
         if(index+1<=max)
            setTimeout(()=>{ShowSingleNum(index+1,arr,max)},500);
            else{
                HideObjectById("showNum");
            }
    },5000);
}