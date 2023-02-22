/* eslint-disable strict */
function handleClickSend(event) {
event.preventDefault();
fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
})
.then((response) => response.json() )
.then((data) => {
    if(data.success){ 
       
        // const linkCard  = document.querySelector('.js-create-link');
        // data.photo = fr.result;
        linkCard.innerHTML = data.cardURL;
        linkCard.href = data.cardURL;
       
        console.log(linkCard.href)
        // linkCard.innerHTML = data.result;
        // linkCard.href = data.result;
    }
    //  formData = data
     console.log(data)
})
};



sendBtn.addEventListener('click', handleClickSend)