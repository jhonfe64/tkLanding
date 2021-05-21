let btnContact =  document.getElementById('btnContact');
let close = document.getElementById('close');
let modal = document.getElementById('modal');
let pagination=  document.querySelectorAll('#pagination li');
let item = 0;
let ul = document.querySelector('#slideContainerUl');
let images = document.getElementsByClassName('slideImages');
let paginationContainer = document.getElementById('pagination')
let indicators = document.getElementsByClassName('indicator');


const slideMovement = (e) => {
    item = e.target.parentElement.value-1;
    ul.style.left = `${item*-100}%`;
    ul.style.transition = '.4s';
}

for(i=0; i<pagination.length; i++){
    pagination[i].addEventListener('click', slideMovement);
}


indicators[0].classList.add('fillIndicator');

for(i=0; i<indicators.length; i++){

    indicators[i].addEventListener('click', function(){

        for(i=0; i<indicators.length; i++){
            indicators[i].classList.remove('fillIndicator');
        }

        this.classList.add('fillIndicator');
    });
}

/****************************************************** */
//modal
/******************************************************* */


btnContact.addEventListener('click', function(){
    modal.style.top = '50%';
    modal.style.transition =  '.7s ease-in-out'
});


close.addEventListener('click', function(){
    modal.style.top = '-500%';
    modal.style.transition =  '.7s ease-in-out'
})




