/* eslint-disable strict */
function handleClickSend(event) {
event.preventDefault();
const url = 'https://dev.adalab.es/api/card/';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.error(error);
    });
};

function showURL(result) {
//   const responseURL = document.querySelector('.form__share__text__p');
  
  if (data.success) {
    // errorMsg.classList.remove('js-hidden');
    // twitterBtn.classList.remove('js-hidden');
    // const textCard =
    //   'Echa un vistazo a mi tarjeta de visita, hecha con %23BotanicalProfileCards" 🌱 ';
    // responseURL.innerHTML = `<span>🌱La tarjeta ha sido creada:</span><a href="${result.cardURL}" target="_blank" >${result.cardURL}</a>`;
    linkCard.innerHTML = data.cardURL;
    linkCard.href = data.cardURL;
    // const twitterLink = document.querySelector('.twitter--link');
    sendBtn.setAttribute('clicked', '');
    linkCard.setAttribute(
      'href',
      `https://twitter.com/intent/tweet?text=${textCard}&url=${result.cardURL}&hashtags=Adalabers,JavaScript,PromoSalas`
    );
  } else {
    //
  }
}

// fetch('https://dev.adalab.es/api/card/', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(data)
// })
// .then((response) => response.json() )
// .then((data) => {
//     if(data.success){ 
       
//         // const linkCard  = document.querySelector('.js-create-link');
//         // data.photo = fr.result;
//         linkCard.innerHTML = data.cardURL;
//         linkCard.href = data.cardURL;
       
//         console.log(linkCard.href)
//         // linkCard.innerHTML = data.result;
//         // linkCard.href = data.result;
//     }
//      formData = data
//      console.log(data)
// })

// }

sendBtn.addEventListener('click', handleClickSend)