function handleClickSend(event) {
event.preventDefault();

fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(data)
})
.then((response) => response.json() )
.then((data) =>{
    if(data.success){ 
        console.log(data)
        const linkCard  = document.querySelector('.js-create-link');
        data.photo = fr.result;
        linkCard.innerHTML = data.cardURL;
        linkCard.href = data.cardURL;
        console.log(linkCard.href)
        // linkCard.innerHTML = data.result;
        // linkCard.href = data.result;
    }
})

}

sendBtn.addEventListener('click', handleClickSend)