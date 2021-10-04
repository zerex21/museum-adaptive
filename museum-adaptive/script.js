 let buttonBuy = document.querySelector('#button__buy')
let offerTickets = document.querySelector('.offerTickets')
let close= document.querySelector('.close')


buttonBuy.addEventListener('click',(e)=>{
  e.preventDefault()
  offerTickets.style.display = 'block'
  offerTickets.classList.toggle('overlay')
})

close.addEventListener('click',()=>{
  offerTickets.style.display = 'none'
  offerTickets.classList.toggle('overlay')
})


let blockSquare = document.querySelector('.block__basic')
let blockSenior = document.querySelector('.block__senior')
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let figures = document.querySelector('.figures')
let minus1 = document.querySelector('.minus1')
let plus1 = document.querySelector('.plus1')
let figures1 = document.querySelector('.figures1')
let counter = 1;



const progress = document.querySelector('.progress');

progress.addEventListener('input', function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})

const volume = document.querySelector('.volume');

volume.addEventListener('input', function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})
 





function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function addRandomPictures() {
  let pictures = [];
  let galleryInner = document.querySelector('.gallery-inner');
  for (let i = 0; i < 15; i++) {
    pictures.push(`<img src="./assets/img/gallery/galery${i+1}.jpg" alt="img-gallery">`)
  }
  shuffle(pictures);
  for (let i = 0; i < 15; i++) {
    galleryInner.innerHTML += `<div class="gallery__block gallery__block_${i+1}">
    ${pictures[i]}</div>`
  }
}
addRandomPictures();