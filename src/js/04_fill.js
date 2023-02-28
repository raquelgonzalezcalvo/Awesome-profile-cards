function showErrorMsg(element) {
  const smallElement = errorMsg.find(eachErrorMsg => eachErrorMsg.attributes.pepino === element.id);
  console.log(errorMsg);
   for (const smallElement of errorMsg) { 
       smallElement.innerHTML = ""; 
       smallElement.innerHTML += `<i class="fa-solid fa-circle-exclamation"></i> Introduce tu ${smallElement.id}`;
    }

  
         
}

  function addClassError() {
    for (const input of allInputsList) {
      input.classList.add('js-border-input')
    }
  }


function handleInputForm(event) {
 data[event.target.name] = event.target.value;
 console.log(data[event.target.name]);
 updatePreview();
 if (event.target.value === ""){    
    showErrorMsg(event.target);
    console.log(event.target)
    addClassError()
}
  localStorage.setItem('formData', JSON.stringify(data))
  console.log(data)
}



for (let i = 0; i < allInputsList.length; i++) {
    allInputsList[i].addEventListener('input', handleInputForm);
}

