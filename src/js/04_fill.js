function showErrorMsg() {
        if (input.name.value === ""){
        errorMsg.innerHTML = "Introduce tu nombre.";
    } else if (input.job.value === "") {
        errorMsg.innerHTML = "Introduce tu puesto de trabajo.";
    } else if (input.job.value === "") {
    }
}


function handleInputName(event) {
    data.name = input.name.value;
    showErrorNameMsg();
    updatePreview();
}

function handleInputJob(event) {
    data.job = input.job.value;
    showErrorNameMsg();
    updatePreview();
}

function handleInputMail(event) {
    data.email = input.email.value;
    updatePreview();
}

function handleInputPhone(event) {
    data.phone = input.phone.value;
    updatePreview();
}

function handleInputLinkedin(event) {
    data.linkedin = input.linkedin.value;
    updatePreview();
}

function handleInputGithub(event) {
    data.github = input.github.value;
    updatePreview();
}


input.name.addEventListener('input', handleInputName);
input.job.addEventListener('input', handleInputJob);
input.email.addEventListener('input', handleInputMail);
input.phone.addEventListener('input', handleInputPhone);
input.linkedin.addEventListener('input', handleInputLinkedin);
input.github.addEventListener('input', handleInputGithub);