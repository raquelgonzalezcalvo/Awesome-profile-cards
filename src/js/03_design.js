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