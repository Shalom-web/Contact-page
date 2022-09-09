const form = document.querySelector("form"),
statusTxt = form.querySelector(".btn span");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php", true); //sending post request to message.php file
    xhr.onload = ()=>{ //ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){ //ajax res status=200 & ready sts=4 => no error 
            let response = xhr.response; //storing response in a response variable
            console.log(response)
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);//sending data
}