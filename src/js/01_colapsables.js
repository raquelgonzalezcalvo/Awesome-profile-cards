/* eslint-disable strict */
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