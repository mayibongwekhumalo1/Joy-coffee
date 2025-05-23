// scroll to top button

const scrollButton = document.createElement('div');
scrollButton.classList.add('scroll-button');
scrollButton.innerHTML = 'top';
scrollButton.style .position = 'fixed';
scrollButton.style .bottom = '10px';
scrollButton.style .right = '10px';
scrollButton.style .backgroundColor = 'brown';
scrollButton.style .color = 'white';
scrollButton.style .borderRadius = '50%';
scrollButton.style .cursor = 'pointer';
document.appendChild(scrollButton);


scrollButton.addEventListener('click', () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });

});


// menu cards 



