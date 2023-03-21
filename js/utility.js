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

    setTimeout(()=>{ShowSingleNum(1,arr,numToShow,level)},500);
}

function DefineRandomNumbers(numOfElems,level){
    let arr = [];
    for(let i=0; i<numOfElems; i++)
        arr[i] = GetRandomInt(level*10,1);
    return arr;
}

function ShowSingleNum(index,arr,max,level){
    document.getElementById("currentNumberIndex").innerText = index;
    document.getElementById("number").innerText = arr[index-1];
    ShowObjectById("number");
    setTimeout(() => {
         HideObjectById("number");
         if(index+1<=max)
            setTimeout(()=>{ShowSingleNum(index+1,arr,max,level)},500);
            else{
                HideObjectById("showNum");
                StartCheckNumbers(arr,max,level);
            }
    },(5500-(level*500)));
}
function StartCheckNumbers(arr,maxNum,level){
    for(let i=1; i<=maxNum; i++){
        const inp = document.createElement("input");
        inp.id = "inp_"+i;
        inp.placeholder = "Inserisci il numero "+i;
        inp.setAttribute("type","text");
        inp.setAttribute("correctAnswer",arr[i-1]);
        document.getElementById("checkNum").appendChild(inp);
    }
    const lev = document.createElement("input");
    lev.id = "levelVal";
    lev.setAttribute("type","hidden");
    lev.value = level;
    document.getElementById("checkNum").appendChild(lev);

    const mn = document.createElement("input");
    mn.id = "maxNumbers";
    mn.setAttribute("type","hidden");
    mn.value = maxNum;
    document.getElementById("checkNum").appendChild(mn);

    const btn = document.createElement("button");
    btn.id="checkNumbers";
    btn.addEventListener("click",CheckUserNums);
    btn.innerText = "Controlla";
    document.getElementById("checkNum").appendChild(btn);

    ShowObjectById("checkNum");
}

function CheckUserNums(){
    let level = parseInt(document.getElementById("levelVal").value);
    let maxNum = parseInt(document.getElementById("maxNumbers").value);

    let wrong = false;
    for(let i=1; i<maxNum; i++){
        let user = parseInt(document.getElementById("inp_"+i).value);
        let real = parseInt(document.getElementById("inp_"+i).getAttribute("correctAnswer"));
        if(user!=real){
            wrong = true;
            break;
        }
    }
    document.getElementById("checkNum").innerHTML = '';
    HideObjectById("checkNum");
    if(!wrong && level+1<=10)
        StartShowNumbers(level+1,maxNum+1);
    else if(!wrong && level+1>10){
        alert("Hai Vinto!");
        ShowObjectById("start");
    }
    else{
        alert("Hai perso");
        ShowObjectById("start");
    }
}