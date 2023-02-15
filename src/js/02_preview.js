/* eslint-disable strict */

// PREGUNTAR
// function handleClickPalette2 (event) {
//     event.preventDefault ();
//     console.log ('holisss');
//     // elementsPalette3.remove('palette3');
//     console.log (elementsPalette3);
//     // elementsPalette32 ();
//    elementsPalette3.pepito='hola';
//     console.log (elementsPalette3);
// }
// elementsPalette32 ();
// const elementsPalette32.forEach((element) => {
//   element.classList.remove('palette3');
// });


// buttonPalette2.addEventListener('click', handleClickPalette2);

// Meter iconos, hacer cambie color bien, funciones para hacerlo más simple


function deletePalette2() {
previewDiv.classList.remove('palette2');
previewList.classList.remove('palette2'); 
}

function deletePalette3() {
previewDiv.classList.remove('palette3');
previewList.classList.remove('palette3');
}

function addPalette2() {
previewDiv.classList.add('palette2');
previewList.classList.add('palette2');
}

function addPalette3() {
previewDiv.classList.add('palette3');
previewList.classList.add('palette3');
}

function handleClickPalette1(event) {
    deletePalette2();
    deletePalette3();
}

function handleClickPalette2(event) {
    deletePalette3();
    addPalette2();
}

function handleClickPalette3(event) {
    deletePalette2();
    addPalette3();   
}

buttonPalette1.addEventListener('click', handleClickPalette1);
buttonPalette2.addEventListener('click', handleClickPalette2);
buttonPalette3.addEventListener('click', handleClickPalette3);


// ------------------------RELLENO TARJETA----------

function handleInputName(event) {
    data.name = input.name.value;
    updatePreview();
}

function handleInputJob(event) {
    data.job = input.job.value;
    updatePreview();
}

function handleInputMail(event) {
    data.email = input.email.value;
    updatePreview();
}

function handleInputPhone(event) {
    data.phone = input.phone.value;
    updatePreview();
}

function handleInputLinkedin(event) {
    data.linkedin = input.linkedin.value;
    updatePreview();
}

function handleInputGithub(event) {
    data.github = input.github.value;
    updatePreview();
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

    input.name.value = '';
    input.job.value = '';
    input.phone.value = '';
    input.email.value = '';
    input.linkedin.value = '';
    input.github.value = '';
    // input.photo.value = '';
}

input.name.addEventListener('input', handleInputName);
input.job.addEventListener('input', handleInputJob);
input.email.addEventListener('input', handleInputMail);
input.phone.addEventListener('input', handleInputPhone);
input.linkedin.addEventListener('input', handleInputLinkedin);

input.github.addEventListener('input', handleInputGithub);
buttonReset.addEventListener('click', handleClickReset);