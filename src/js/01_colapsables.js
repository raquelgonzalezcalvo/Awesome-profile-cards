/* eslint-disable strict */

/*
fillLegend.addEventListener('click', handleClickFill);

function handleClickFill (event) {
    if (fillForm.classList.contains('collapsed')) {
        fillForm.classList.remove('collapsed');
        fillArrow.classList.remove('arrow-collapsed');
        designForm.classList.add('collapsed');
        designArrow.classList.add('arrow-collapsed');
        shareForm.classList.add('collapsed');
        shareArrow.classList.add('arrow-collapsed');
    } else { 
        fillForm.classList.add('collapsed');
        fillArrow.classList.add('arrow-collapsed');
        designForm.classList.remove('collapsed');
        designArrow.classList.remove('arrow-collapsed');
        shareForm.classList.add('collapsed');
        shareArrow.classList.add('arrow-collapsed');
    }
   
}
shareLegend.addEventListener('click', handleClickShare);
 function handleClickShare (event) {
    if (shareForm.classList.contains('collapsed')) {
        shareForm.classList.remove('collapsed');
        shareArrow.classList.remove('arrow-collapsed');
        designForm.classList.add('collapsed');
        designArrow.classList.add('arrow-collapsed');
        fillForm.classList.add('collapsed');
        fillArrow.classList.add('arrow-collapsed');
    } else { 
        shareForm.classList.add('collapsed');
        shareArrow.classList.add('arrow-collapsed');
        designForm.classList.remove('collapsed');
        designArrow.classList.remove('arrow-collapsed');
        fillForm.classList.add('collapsed');
        fillArrow.classList.add('arrow-collapsed');
    }
   
}
designLegend.addEventListener('click', handleClickDesign);

function handleClickDesign (event) {
    if (designForm.classList.contains('collapsed')) {
        fillForm.classList.add('collapsed');
        fillArrow.classList.add('arrow-collapsed');
        designForm.classList.remove('collapsed');
        designArrow.classList.remove('arrow-collapsed');
        shareForm.classList.add('collapsed');
        shareArrow.classList.add('arrow-collapsed');
    } else { 
        fillForm.classList.add('collapsed');
        fillArrow.classList.add('arrow-collapsed');
        designForm.classList.add('collapsed');
        designArrow.classList.add('arrow-collapsed');
        shareForm.classList.add('collapsed');
        shareArrow.classList.add('arrow-collapsed');
    }
   
}
*/

function closeAllSections() {
    designForm.classList.add('collapsed');
    fillForm.classList.add('collapsed');
    shareForm.classList.add('collapsed');
}

function turnDownAllArrows() {
    designArrow.classList.add('arrow-collapsed');
    fillArrow.classList.add('arrow-collapsed');
    shareArrow.classList.add('arrow-collapsed');
}

function openAndTurnDesignSection() {
    designForm.classList.remove('collapsed');
    designArrow.classList.remove('arrow-collapsed');
}

function handleClickDesign(event) {
    closeAllSections();
    turnDownAllArrows();
    openAndTurnDesignSection();
}

function openAndTurnFillSection() {
    fillForm.classList.remove('collapsed');
    fillArrow.classList.remove('arrow-collapsed');
}

function handleClickFill(event) {
    closeAllSections();
    turnDownAllArrows();
    openAndTurnFillSection();
}

function openAndTurnShareSection() {
    shareForm.classList.remove('collapsed');
    shareArrow.classList.remove('arrow-collapsed');
}

function handleClickShare(event) {
    closeAllSections();
    turnDownAllArrows();
    openAndTurnShareSection();
}

designLegend.addEventListener('click', handleClickDesign);
fillLegend.addEventListener('click', handleClickFill);
shareLegend.addEventListener('click', handleClickShare);