// console.log(inputs[0].name.value);
console.log(data)
if (localStorageData !== undefined) {
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


