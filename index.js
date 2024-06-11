// const { url } = require("inspector");
const prevImage = document.querySelector('#previmage')
const nextImage =document.querySelector('#nextimage')
const images = [{id: 1 , imgText: '' , img: 'assets/images/coretan-otaku-.jpg'},{id: 2 , imgText: '' , img: 'assets/images/12.jpeg'},{id: 3 , imgText: '' , img: 'assets/images/34.jpeg'},{id: 4 , imgText: '' , img: 'assets/images/65.jpeg'},{id: 5 , imgText: '' , img: 'assets/images/8.jpeg'},{id: 6 , imgText: '' , img: 'assets/images/naruto-vs-sasuke-first-blood.jpg'}]
const backgroundSlide = document.querySelector('#imageslider') 
let currentslide = 0;
function setImagetoslide(item){
    // console.log('beans')
    currentslide += 1
    // console.log(`./${images[(currentslide - 1)].img})`)
    if(currentslide >= images.length){
        currentslide = 0
    }

    backgroundSlide.style.background = `url(./${images[(currentslide)].img})`
    backgroundSlide.style.backgroundSize = '100% 100%'
}
setInterval(setImagetoslide , 3000)

prevImage.addEventListener('click' , function (){
    
    currentslide = currentslide - 1 
    
    console.log(currentslide - 1 )
})

