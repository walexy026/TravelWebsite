const navSlid = () => {
    const ham = document.querySelector('.hamburger')
    const nav = document.querySelector('.navlinks');
   const navLi = document.querySelectorAll('.navlinks li')
//    toggle nav
    ham.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active')
        navLi.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = " ";
            }else{
                link.style.animation = `navlinksId 0.5s ease forwards ${index / 7 + 2}s` 
            }
            // console.log(index / 7)
    });
     ham.classList.toggle('toggle')  
    })
}
navSlid();
// test = 89

// console.log(test)