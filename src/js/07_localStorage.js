// console.log(inputs[0].name.value);
console.log(data)
if (localStorageData) {
    data = localStorageData;
    
    inputName.value = data.name;
    inputJob.value = data.job;
    //inputPhoto.value = data.photo;
    inputEmail.value = data.email;
    inputPhone.value = data.phone;
    inputLinkedin.value = data.linkedin;
    inputGithub.value = data.github;

    updatePreview()
}


