const localStorageData = JSON.parse(localStorage.getItem('formData'))
console.log(data)
if (localStorageData) {
    data = localStorageData;
    
    updatePreview()

     inputs[0].name.value = data.name;
     inputs[0].job.value = data.job;
     inputs[0].phone.value = data.phone;
     inputs[0].email.value = data.email;
     inputs[0].linkedin.value = data.linkedin;
     inputs[0].photo.value = data.photo;

    // hacerlo para todos los inputs
    // 1. meter una clase a los inputs js-name-input
    // js-job-input, js-phone-input, js-email-input, js-linkedin-input, js-github-input, js-photo-input

    // 2- coger elementos desde HTML
    // const iunputJob = document.querySelector('.js-job-input');
    // const inputPhone = document.querySelector('.js-phone-input');
    // const inputEmail = document.querySelector('.js-email-input');
    // const inputLinkedin = document.querySelector('.js-linkedin-input');
    // const inputGithub = document.querySelector('.js-github-input');
    // const inputPhoto = document.querySelector('.js-photo-input');

}
