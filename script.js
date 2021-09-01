var header = document.getElementById('header');
var wrapper = document.getElementById('wrapper');
var loginForm = document.querySelector('.login-form');
var signUpForm = document.querySelector('.sign-up');
var userInfo = document.getElementById('user-info');

var user = {}
var users = [];

function login() {
    var message = document.getElementById('message');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    for (var user of users) {
        if ((email === user.email || user.username === email) && password === user.password) {
            console.log('Uspjesan login');
            message.classList.add('none');
            loginForm.classList.add('none');
            wrapper.classList.remove('none');
            header.classList.remove('none');
            userInfo.innerHTML = user.firstName + ' ' + user.lastName;
        } else {
            message.classList.remove('none');
            console.log('Pokusajte ponovo');
        }
    }
}

function loginOnEnter (e) {
    if (e.keyCode === 13)
    login();
}

function logout () {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    email.value = '';
    password.value = '';
    loginForm.classList.remove('none');
    wrapper.classList.add('none');
    header.classList.add('none');
}

function signUp () {
    loginForm.classList.add('none');
    signUpForm.classList.remove('none');
}

function saveUser () {
    var user = {
        firstName:getVal('firstName'),
        lastName:getVal('lastName'),
        email:getVal('signUpEmail'),
        username:getVal('username'),
        password:getVal('signUpPassword')
    }
    users.push(user);
    console.log(users);
    loginForm.classList.remove('none');
    signUpForm.classList.add('none');
}

function getVal (id) {
    return document.getElementById(id).value;
}