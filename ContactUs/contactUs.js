const form = document.getElementById('form');
const fullName = document.getElementById('FullName');
const Email = document.getElementById('Email')
const textArea =document.getElementById('textarea')
const submitButton =document.getElementById('submit')
const errorName =document.getElementById('errorName')
const errorEmail =document.getElementById('errorEmail')
const errorTextArea =document.getElementById('errorTextArea')
const errorSubmit =document.getElementById('errorSubmit')
// console.log(form)
// form.innerHTML ="the dom is nice"
form.addEventListener('click', (f)=>{
f.preventDefault();
if (fullName.value === ''){
errorName.innerHTML = 'name cannot be blank'
}
if (Email.value === ''){
errorEmail.innerHTML = 'Email cannot be blank'
}
if (textArea.value === ''){
errorTextArea.innerHTML = 'Text cannot be blank'
}
})