let axios = require('axios')


console.log("Welcome to Weather forecast")
list_location= [];
function searchButton() {
    let x = document.getElementById("Entered_Location").value;
    console.log("ur entered location is:",x);
         if (x!== "") {
            console.log("The Location Entered is: " + x)
            list_location.push(x)
        } else {
            console.log("The Location Entered is not valid.Please try Again")
        }
        document.getElementById("Entered_Location").value = '';
}
function DataSearched(){
    console.log(list_location)
    let dataSetTag = document.getElementById("dataSet");
   
    
//     list_location.forEach(location => {
//         let entrypt = document.createElement('div');
//         entrypt.innerHTML = location;
//         dataSetTag.appendChild(liTag)
//    });

//93df915769b03b4c74b22894f4496f1c
 for(let i=0;i<list_location.length;i++){
    let entrypt = document.createElement('div');
    entrypt.innerHTML = list_location[i];
    dataSetTag.appendChild(entrypt)
 }
    //dataSetTag.appendChild(ulTag);

}