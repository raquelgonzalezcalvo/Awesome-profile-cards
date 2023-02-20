function showErrorMsg() { 
   for (let i = 0; i < allInputsList.length; i++) { 
       errorMsg[i].innerHTML = ""; 
       errorMsg[i].innerHTML += `<i class="fa-solid fa-circle-exclamation"></i>Introduce tu ${allInputsList[i].name}`;

      console.log(allInputsList[i].name) 

    }   
         
  }


function handleInputForm(event) {
 data[event.target.name] = event.target.value;
 updatePreview();
 if (event.target.value === ""){    
    showErrorMsg();
}
}



for (let i = 0; i < allInputsList.length; i++) {
    allInputsList[i].addEventListener('input', handleInputForm);
}

