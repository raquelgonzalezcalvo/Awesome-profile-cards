// console.log(inputs[0].name.value);
console.log(data)
if (localStorageData !== undefined) {
    data = localStorageData;
    
    updatePreview()

     inputName.value = data.name;
     inputJob.value = data.job;
     inputPhone.value = data.phone;
     inputEmail.value = data.email;
     inputLinkedin.value = data.linkedin;
     inputGithub.value = data.photo;
}


