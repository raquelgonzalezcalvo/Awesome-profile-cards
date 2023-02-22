/* eslint-disable strict */
// const pepe = JSON.parse(localStorage.getItem('name'))

// inputName.value = pepe;

const localStorageData = JSON.parse(localStorage.getItem('formData'));

// console.log(inputs[0].name.value);
console.log(data)
if (localStorageData) {
    data = localStorageData;
    
    updatePreview()
     
     inputName.value = data.name;
     inputJob.value = data.job;
     //inputPhoto.value = data.photo;
     inputEmail.value = data.email;
     inputPhone.value = data.phone;
     inputLinkedin.value = data.linkedin;
     inputGithub.value = data.github;
}

function updatePreview() {
    if (data.name === '') {
    previewName.innerHTML = 'Nombre y Apellidos';
    } else {
    previewName.innerHTML = data.name;
    }

    if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
    } else {
    previewJob.innerHTML = data.job;
    }

    previewMail.href= `mailto:${data.email}`;
    previewPhone.href = `tel:${data.phone}`;
    previewLinkedin.href = `https://linkedin.com/in/${data.linkedin}`;
    previewGithub.href  = `https://github.com/${data.github}`;
    
}




const handleClickReset = () => {
    

    data.palette = 1;
    data.name = '';
    data.job = '';
    data.phone = '';
    data.email = '';
    data.linkedin = '';
    data.github = '';
    data.photo = '';

    updatePreview();
   


    
    for (let i = 0; i < allInputsList.length; i++) {
    allInputsList[i].value = ''; 
}
}


buttonReset.addEventListener('click', handleClickReset);