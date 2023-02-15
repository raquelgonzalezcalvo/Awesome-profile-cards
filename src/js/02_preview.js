/* eslint-disable strict */
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

    input.name.value = '';
    input.job.value = '';
    input.phone.value = '';
    input.email.value = '';
    input.linkedin.value = '';
    input.github.value = '';
    // input.photo.value = '';
}

buttonReset.addEventListener('click', handleClickReset);