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
