// let Head1 = document.getElementById("Head1");
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

let hour = document.getElementById("H");
let minute = document.getElementById("M");
let sec = document.getElementById("S");

let box = document.getElementById("box");


function fun () {

    let username = input1.value;
    let password = input2.value;
   
    if (username == "Manoj" && password == "Manoj@123") {
        H.innerHTML = setInterval(()=>{
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            hour.innerHTML = h;
            minute.innerHTML = m;
            sec.innerHTML = s;
            
        
            box.style = "background-color:yellow"
        
        
        }) + username;
        username = input1.value = "";
        password = input2.value = "";
        


         }

         else{
             Head1.innerHTML = "Who Are You?" 
             
         }

}


