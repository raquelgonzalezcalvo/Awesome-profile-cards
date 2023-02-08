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
previewRectangle.classList.remove('palette2');
borderMobile.classList.remove('palette2'); 
borderEmail.classList.remove('palette2'); 
borderLinkedin.classList.remove('palette2'); 
borderGithub.classList.remove('palette2');
previewName.classList.remove('palette2'); 
}

function deletePalette3() {
previewRectangle.classList.remove('palette3');
borderMobile.classList.remove('palette3'); 
borderEmail.classList.remove('palette3'); 
borderLinkedin.classList.remove('palette3'); 
borderGithub.classList.remove('palette3');
previewName.classList.remove('palette3');
 
}

function addPalette2() {
previewRectangle.classList.add('palette2');
borderMobile.classList.add('palette2'); 
borderEmail.classList.add('palette2'); 
borderLinkedin.classList.add('palette2'); 
borderGithub.classList.add('palette2');
previewName.classList.add('palette2');
 
}

function addPalette3() {
previewRectangle.classList.add('palette3');
borderMobile.classList.add('palette3'); 
borderEmail.classList.add('palette3'); 
borderLinkedin.classList.add('palette3'); 
borderGithub.classList.add('palette3');
previewName.classList.add('palette3');
 
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
    const nameWritten = inputName.value;

    if (nameWritten === '') {
    previewName.innerHTML = 'Nombre y Apellido';
    } else {
    previewName.innerHTML = nameWritten;
    }
}

inputName.addEventListener('input', handleInputName);


function handleInputJob(event) {
    const jobWritten = inputJob.value;

    if (jobWritten === '') {
    previewJob.innerHTML = 'Front-end developer';
    } else {
    previewJob.innerHTML = jobWritten;
    }
}

inputJob.addEventListener('input', handleInputJob);

function handleInputMail(event) {
    const mailWritten = inputMail.value;
    previewMail.href= `mailto:${mailWritten}`;
}

inputMail.addEventListener('input', handleInputMail);

function handleInputPhone(event) {
    const phoneWritten = inputPhone.value;
    previewPhone.href = `tel:${phoneWritten}`;
}

inputPhone.addEventListener('input', handleInputPhone);

function handleInputLinkedin(event) {
    const linkedinWritten = inputLinkedin.value;
    previewLinkedin.href = linkedinWritten;
}

inputLinkedin.addEventListener('input', handleInputLinkedin);

function handleInputGithub(event) {
    const githubWritten = inputGithub.value;
    previewGithub.href = githubWritten;
}

inputGithub.addEventListener('input', handleInputGithub);