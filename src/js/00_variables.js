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

const data = {
    palette: 1,
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: ''
};

const input = {
    name: document.querySelector('.js-fullName'),
    job: document.querySelector('.js-job'),
    email: document.querySelector('.js-email'),
    phone: document.querySelector('.js-phone'),
    linkedin: document.querySelector('.js-linkedin'),
    github: document.querySelector('.js-github')

};

const buttonReset = document.querySelector('.js-reset');
// const inputName = document.querySelector('.js-fullName');
const previewName = document.querySelector('.js-name');

// const inputJob = document.querySelector('.js-job');
const previewJob = document.querySelector('.js-preview-job');

// const inputMail = document.querySelector('.js-email');
const previewMail = document.querySelector('.js-icon-e-mail');

// const inputPhone = document.querySelector('.js-phone');
const previewPhone = document.querySelector('.js-icon-mobile');

// const inputLinkedin = document.querySelector('.js-linkedin');
const previewLinkedin = document.querySelector('.js-icon-linkedin');

// const inputGithub = document.querySelector('.js-github');
const previewGithub = document.querySelector('.js-icon-github');
