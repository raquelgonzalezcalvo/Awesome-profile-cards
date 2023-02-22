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
                linkCard.innerHTML = data.cardURL;
                linkCard.href = data.cardURL;
                
                twitterSection.classList.remove("display--none");
                sendBtn.classList.add("clicked");
            }
        
        })
};



sendBtn.addEventListener('click', handleClickSend)