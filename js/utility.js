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
    console.log("test");
    HideObjectById("start");
    ShowObjectById("showNum");
}

/** Function used to hide an object with a specific id */
function HideObjectById(id){
    document.getElementById(id).classList.add("d-none");
}
/** Function used to hide an object with a specific id */
function ShowObjectById(id){
    document.getElementById(id).classList.remove("d-none");
}