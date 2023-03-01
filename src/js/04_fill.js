function showErrorMsg(element) {
  for (let i = 0; i < errorMsg.length; i++) {
   if (errorMsg[i].attributes.error.value === element.id) {
    errorMsg[i].innerHTML = "";
    errorMsg[i].innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Introduce tu ${errorMsg[i].id}`;
  }
  }
}

function addClassError(element) {
  for (let i = 0; i < allInputsList.length; i++) {
   if (allInputsList[i].id === element.id) {
    allInputsList[i].classList.add('js-border-input');
    allInputsList[4].classList.remove('js-border-input');
  }
  }
}

function handleInputForm(event) {
 data[event.target.name] = event.target.value;
 updatePreview();
 if (!event.target.value){    
    showErrorMsg(event.target);
    addClassError(event.target);
} else {
  hideShowErrorMsg(event.target);
  removeClassError(event.target);
}
  localStorage.setItem('formData', JSON.stringify(data))
}

function hideShowErrorMsg(element) {
  for (let i = 0; i < errorMsg.length; i++) {
   if (errorMsg[i].attributes.error.value === element.id) {
    errorMsg[i].innerHTML = "";
  }
  }
}

function removeClassError(element) {
  for (let i = 0; i < allInputsList.length; i++) {
   if (allInputsList[i].id === element.id) {
    allInputsList[i].classList.remove('js-border-input');
  }
  }
}

for (let i = 0; i < allInputsList.length; i++) {
    allInputsList[i].addEventListener('input', handleInputForm);
}

