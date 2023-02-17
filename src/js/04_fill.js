const showErrorMsg = errorMsg.map((message) => message.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Introduce tu nombre`);
// esto abajo era lo que teníamos antes que es IGUAL
// function showErrorMsg() { 
//     for (let i = 0; i < errorMsg.length; i++) { 
//         errorMsg[i].innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Introduce tu nombre`;
//   }
// }

function handleInputForm(event) {
 data[event.target.name] = event.target.value;
 updatePreview();
 if (event.target.value === ""){    
    showErrorMsg();
}
}

const eventInput = allInputsList.map((input) => input.addEventListener('input', handleInputForm));
/*
for (let i = 0; i < allInputsList.length; i++) {
    allInputsList[i].addEventListener('input', handleInputForm);
}
*/
