
let allImages = Array.from(document.querySelectorAll('.images_nav'));
let popImage = document.querySelector('.pop_image');
let cross = document.querySelector('.cross');
let right = document.querySelector('.right');
let left = document.querySelector('.left');
let preview = popImage.querySelector('img');
let currentPosition = 0;

let rightForward = () => {
    if(currentPosition == allImages.length -1){
        currentPosition = 0;
    }
    else{
        currentPosition += 1;
    }
    preview.src = allImages[currentPosition].src;
}

allImages.map((elmt,index) =>{
    elmt.addEventListener('click' , ()=> {
     currentPosition = index;
     preview.src = allImages[index].src;
     popImage.classList.add('active')
     right.addEventListener('click' , rightForward)
    })
})

cross.addEventListener('click' , ()=> {
    popImage.classList.remove('active');
})

popImage.addEventListener('click' , (e)=> {
    if(e.target.classList.contains('active')){
        popImage.classList.remove('active');
    }

})
window.addEventListener('keydown', (e) => {
    if(e.key == 'ArrowRight'){
        rightForward()
    } else if(e.key == 'ArrowLeft'){
        leftForward()
    }
})

let leftForward = () => {
    if(currentPosition == 0){
        currentPosition = allImages.length - 1;
    }
    else{
        currentPosition -= 1;
    }
    preview.src = allImages[currentPosition].src;
}

allImages.map((elmt,index) =>{
    elmt.addEventListener('click' , ()=> {
     currentPosition = index;
     preview.src = allImages[index].src;
     popImage.classList.add('active')
     left.addEventListener('click' , leftForward)
    })
})



