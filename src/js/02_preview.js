const localStorageData = JSON.parse(localStorage.getItem('formData'));

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
    
    resetImage();
    localStorage.removeItem('formData');
    
    for (let i = 0; i < allInputsList.length; i++) {
    allInputsList[i].value = '';
}
}

function resetImage() {
  profilePreview.style.backgroundImage = `url("./assets/images/favicon.png")`;
  profileImage.style.backgroundImage = 'none';
  updatePreview();
}

buttonReset.addEventListener('click', handleClickReset);