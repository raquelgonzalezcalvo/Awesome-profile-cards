function handleClickPalettes(ev) {
    const btnPaletteId = parseInt(ev.target.id);
    console.log(btnPaletteId);
    console.log(ev.target.id);
    data.palette = btnPaletteId;
    previewDiv.classList.remove('palette2');
    previewDiv.classList.remove('palette3');
    previewDiv.classList.add(`palette${btnPaletteId}`);
    previewList.classList.remove('palette2');
    previewList.classList.remove('palette3');
    previewList.classList.add(`palette${btnPaletteId}`);
}

buttonPalette1.addEventListener('click', handleClickPalettes);
buttonPalette2.addEventListener('click', handleClickPalettes);
buttonPalette3.addEventListener('click', handleClickPalettes);