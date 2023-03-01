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
    animation();
}

function openAndTurnFillSection() {
    fillForm.classList.remove('collapsed');
    fillArrow.classList.remove('arrow-collapsed');
}

function handleClickFill(event) {
    closeAllSections();
    turnDownAllArrows();
    openAndTurnFillSection();
    animation();
}

function openAndTurnShareSection() {
    shareForm.classList.remove('collapsed');
    shareArrow.classList.remove('arrow-collapsed');
}

function handleClickShare(event) {
    closeAllSections();
    turnDownAllArrows();
    openAndTurnShareSection();
    animation();
}
function animation(){
    designForm.classList.remove('animation');
    fillForm.classList.remove('animation');
    shareForm.classList.remove('animation');
    designForm.classList.add('animation-open');
    fillForm.classList.add('animation-open');
    shareForm.classList.add('animation-open');
}

designLegend.addEventListener('click', handleClickDesign);
fillLegend.addEventListener('click', handleClickFill);
shareLegend.addEventListener('click', handleClickShare);
