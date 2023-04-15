const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const pref = './assets/'
let oggetto = images[0]

const imgPrinc = document.querySelector('.items')
const imgMicro = document.querySelector('.micro')
const stop = document.getElementById('stop')
const start = document.getElementById('start')

images.forEach( (element, index) => {
    
    const {image, title, text} = element

    if ( index === 0 ) {
        
        imgPrinc.innerHTML += `
        <div class="item relative active">
            <img src='${pref}${image}' alt='${title}'>
            <div class="absolute info-image">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        </div>
        `
        
        imgMicro.innerHTML += `
        <div class="micro active">
            <img src='${pref}${image}' alt="">
        </div>
        `
    }else{

        imgPrinc.innerHTML += `
        <div class="item relative">
            <img src='${pref}${image}' alt='${title}'>
            <div class="absolute info-image">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        </div>
        `
        
        imgMicro.innerHTML += `
        <div class="micro hover">
            <img src='${pref}${image}' alt="">
        </div>
        `

    }

});

let indexImg = 0
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

//premo su freccia indietro
prev.addEventListener('click', function(){

    if (indexImg == 0) {
        indexImg = images.length-1
    }else{
        indexImg--;
    }

    document.querySelector('.item.active').classList.remove('active')
    imgPrinc.getElementsByClassName('item')[indexImg].classList.add('active')

    document.querySelector('.micro.active').classList.remove('active')
    imgMicro.getElementsByClassName('micro')[indexImg].classList.add('active')
})

//premo su freccia avanti
next.addEventListener('click', function(){

    if (indexImg == images.length - 1) {
        indexImg = 0
    }else{
        indexImg++;
    }

    document.querySelector('.item.active').classList.remove('active')
    imgPrinc.getElementsByClassName('item')[indexImg].classList.add('active')

    document.querySelector('.micro.active').classList.remove('active')
    imgMicro.getElementsByClassName('micro')[indexImg].classList.add('active')
})

//carosello automatico
automatico = setInterval(()=>{
    
    if (indexImg == images.length - 1) {
        indexImg = 0
    }else{
        indexImg++;
    }

    document.querySelector('.item.active').classList.remove('active')
    imgPrinc.getElementsByClassName('item')[indexImg].classList.add('active')

    document.querySelector('.micro.active').classList.remove('active')
    imgMicro.getElementsByClassName('micro')[indexImg].classList.add('active')

}, 3000)

//start carosello
start.addEventListener('click', function () {
    
    //carosello automatico
    automatico = setInterval(()=>{
    
        if (indexImg == images.length - 1) {
            indexImg = 0
        }else{
            indexImg++;
        }
    
        document.querySelector('.item.active').classList.remove('active')
        imgPrinc.getElementsByClassName('item')[indexImg].classList.add('active')
    
        document.querySelector('.micro.active').classList.remove('active')
        imgMicro.getElementsByClassName('micro')[indexImg].classList.add('active')
    
    }, 3000)

})

//stop carosello
stop.addEventListener('click', function () {
    clearInterval(automatico)
})