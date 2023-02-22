'use strict';

const designLegend = document.querySelector('.js-design-legend');
const fillLegend = document.querySelector('.js-fill-legend');
const shareLegend = document.querySelector('.js-share-legend');
const designForm = document.querySelector('.js-design-form');
const fillForm = document.querySelector('.js-fill-form');
const shareForm = document.querySelector('.js-share-form');
const shareArrow = document.querySelector('.js-share-arrow');
const fillArrow = document.querySelector('.js-fill-arrow');
const designArrow = document.querySelector('.js-design-arrow');


// ----------------------------------PALETTE -----------------------------------------

const buttonPalette1 = document.querySelector ('.js-buttonpalette1');
const buttonPalette2 = document.querySelector ('.js-buttonpalette2');
const buttonPalette3 = document.querySelector ('.js-buttonpalette3');
const previewDiv = document.querySelector('.js-preview-div');
const previewList = document.querySelector('.js-list');

// --------------------------------RELLENO TARJETA------------------------------------

let data = {
    palette: 1,
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: ''
};

const inputs = [
    {
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: ''}
]


const allInputsList = document.querySelectorAll('.js-input');
const buttonReset = document.querySelector('.js-reset');
const previewName = document.querySelector('.js-name');
const previewJob = document.querySelector('.js-preview-job');
const previewMail = document.querySelector('.js-icon-e-mail');
const previewPhone = document.querySelector('.js-icon-mobile');
const previewLinkedin = document.querySelector('.js-icon-linkedin');
const previewGithub = document.querySelector('.js-icon-github');
const errorMsg = document.querySelectorAll('.js-error');
const sendBtn = document.querySelector('.js-create-btn');
const twitterBtn = document.querySelector('.js-twitter-btn');
const linkCard  = document.querySelector('.js-create-link');
const inputName = document.querySelector('.js-name-input');
