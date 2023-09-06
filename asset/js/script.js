const d = document,
      w = window;

w.addEventListener("DOMContentLoaded", () =>{
    mobileMenu();
});

const mobileMenu = () => {
    const btnMobile = d.querySelector('.nav__logo__mobile'),
    btnIcon = d.querySelector('.nav__logo__mobile i'),
    navPanel = d.querySelector('.nav__link');

    d.addEventListener('click', (e) =>{
        if(e.target === btnMobile){
            if(!btnMobile.classList.contains('isOpen')){
                btnIcon.classList.remove('fa-bars');
                btnIcon.classList.add('fa-xmark');
                navPanel.style.display = 'flex';
                btnMobile.classList.add('isOpen');
            }else {
                btnIcon.classList.remove('fa-xmark');
                btnIcon.classList.add('fa-bars');
                navPanel.style.display = 'none';
                btnMobile.classList.remove('isOpen');
              }
        }
    });
}