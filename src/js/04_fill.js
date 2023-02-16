function showErrorMsg() {
        if (input.name.value === ""){
        errorMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Introduce tu nombre`;
    } else if (input.job.value === "") {
        errorMsg.innerHTML = "Introduce tu puesto de trabajo.";
    } else if (input.job.value === "") {
    }
}


function handleInputForm(event) {
 data[event.target.name] = event.target.value;
 updatePreview();
}

for (let i = 0; i < allInputsList.length; i++) {
    allInputsList[i].addEventListener('input', handleInputForm);
}
