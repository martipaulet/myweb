// -------CONSTANTES--------

const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const twitter = document.getElementById('twitter-btn');
const insta = document.getElementById('insta-btn');
const facebook = document.getElementById('facebook-btn');


// ------LLAMADA VALIDACION FORMULARIO-----------
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validacion();
});

// -------SOCIAL LINKS------------
twitter.addEventListener('click', (e) => {
    e.preventDefault();
    axios.get(`https://martipaulet-app.herokuapp.com/social-links`)
        .then(({data}) => {
            var linktwitter = data[0].twitter
            console.log(linktwitter)
            window.open(linktwitter, '_blank')
        })
}); 

insta.addEventListener('click', (e) => {
    e.preventDefault();
    axios.get(`https://martipaulet-app.herokuapp.com/social-links`)
    .then(({data}) => {
        var linkinsta = data[0].instagram
        console.log(linkinsta)
        window.open(linkinsta, '_blank')
    })
}); 

facebook.addEventListener('click', (e) => {
    e.preventDefault();
    axios.get(`https://martipaulet-app.herokuapp.com/social-links`)
    .then(({data}) => {
        var linkfacebook = data[0].facebook
        console.log(linkfacebook)
        window.open(linkfacebook, '_blank')
    })
}); 


// --------VALIDACION FORMULARIO--------
function validacion() {
    const namevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const messagevalue = message.value;
    var cond = 1;

    if (namevalue === '') {
        setErrorFor(username, 'Enter a username');
        cond = 0;
    }else {
        setSuccessFor(username); 
    }


    if (emailvalue === '') {
        setErrorFor(email, 'Enter an email');
        cond = 0;
    }else if (!isEmail(emailvalue)){
        setErrorFor (email, 'Enter a valid email')
        cond = 0
    }
    else {
        setSuccessFor(email);
    }


    if (messagevalue === '') {
        setErrorFor(message, 'Enter a message')
        cond = 0
    }else {
        setSuccessFor(message);
    }


    if (cond == 1) {
        axios.post('https://martipaulet-app.herokuapp.com/contact-data',{
            user: namevalue,
            email: emailvalue,
            message: messagevalue
        })
        alert('Your message has been sent');

    }
}

// ------MENSAJE DE ERROR FORMULARIO--------
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'field textarea error';
}

// -------MENSAJE FORMULARIO CORRECTO
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'field textarea ok';
}


// ------COMPROVACION EMAIL FORMULARIO
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




