let idGroup = (idGroup) => document.getElementById(idGroup);
let form = idGroup('form'),
 fullName = idGroup('FullName'),
 Email = idGroup('Email'),
 textArea =idGroup('textarea'),
 submitButton =idGroup('submit'),
 errorName =idGroup('errorName'),
 errorEmail =idGroup('errorEmail'),
 errorTextArea =idGroup('errorTextArea'),
 errorSubmit =idGroup('errorSubmit');
// const form = document.getElementById('form');
// const fullName = document.getElementById('FullName');
// const Email = document.getElementById('Email')
// const textArea =document.getElementById('textarea')
// const submitButton =document.getElementById('submit')
// const errorName =document.getElementById('errorName')
// const errorEmail =document.getElementById('errorEmail')
// const errorTextArea =document.getElementById('errorTextArea')
// const errorSubmit =document.getElementById('errorSubmit')


// console.log(form)
// errorSubmit.innerHTML ="the dom is nice"
// form.addEventListener('click', (e)=>{
// e.preventDefault();
// if (fullName.value === ''){
// errorName.innerHTML = 'name cannot be blank'
// return false
// }
// if (Email.value === ''){
// errorEmail.innerHTML = 'Email cannot be blank'
// }
// if (textArea.value === ''){
// errorTextArea.innerHTML = 'Text cannot be blank'
// }
// })

let fName = fullName.addEventListener('keyup',() =>{
    let fullName = document.getElementById('FullName').value;    
    if (fullName.length ==   0){
        errorName.innerHTML = 'name cannot be empty'
        return false
    } 
    if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        errorName.innerHTML = 'write full name';
        return false
    }else
     errorName.innerHTML = 'correct'
    return true
    
} )
let mail = Email.addEventListener('keyup',() =>{
        let Email = document.getElementById('Email').value;
           
           if (Email.length == 0){
               errorEmail.innerHTML = 'Email is required'
               return false
               } 
               if (!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
                   errorEmail.innerHTML = 'Email Invalid';
                   return false
               }
               errorEmail.innerHTML = 'correct';
               return true
 })
let textContent = textArea.addEventListener('keyup',() =>{
        let textArea = document.getElementById('textarea').value;
        let required = 250;
        let left = required - textArea.length;
           
           if (left > 0){
               errorTextArea.innerHTML = left    +   ' more characters is required'
               return false
               } 
               if( left > 250){
                errorTextArea.innerHTML = left + ' number exceeeded'
                return false
               }
               errorTextArea.innerHTML = 'correct';
            return true
 })
        
 submitButton.addEventListener('click', () =>{
    let submitButton = document.getElementById('submit')
    if(!fName || !mail || !textContent ){
        errorSubmit.style.display ='block'
        errorSubmit.innerHTML ='Please fix error to submit';
        setTimeout(function(){ errorSubmit.style.display ='none', 5000;})
        return false;
    }
 })
