console.log('%c HI', 'color: firebrick')
let DOGS = [];

document.addEventListener('DOMContentLoaded', () => {

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgContainer = document.querySelector('#dog-image-container')
const dogBreeds = document.querySelector('#dog-breeds')
const breedDropdown = document.querySelector('#breed-dropdown')



breedDropdown.addEventListener('change', function(e) {
  fetch(breedUrl)
    .then(function(response){
      return response.json()
    })
    .then(function(parsedJSonObj){
    let filteredBreeds =  Object.keys(parsedJSonObj.message).filter(function(breed){
        if(e.target.value === breed[0]) {
        return breed
      }
      })
      dogBreeds.innerHTML = ''
      parseBreeds(filteredBreeds).forEach(breed => dogBreeds.innerHTML += breed)
    })
  // let filteredBreeds = parseBreeds(Object.keys()) e.target.value) {
  //
  // } ;
})

fetch(imgUrl)
  .then(function(response){

    return response.json()
  })
  .then(function(parsedJSONObj){

    imgContainer.innerHTML = parseDogsIMG(parsedJSONObj.message).join()

  })

  fetch(breedUrl)
    .then(function(response){

      return response.json()
    })
    .then(function(parsedJSONObj){


      parseBreeds(Object.keys(parsedJSONObj.message)).forEach(breed =>
      dogBreeds.innerHTML += breed
      )

    })


    dogBreeds.addEventListener('click', function(e){
      if(e.target.tagName === 'LI'){
        console.log(e.target.innerHTML)
        e.target.style.color = 'blue'
      }
    })


})

function parseDogsIMG(jsonObj){

  return jsonObj.map(function(dog){
    return   `<img src= ${dog}>`
  })
}



function parseBreeds(jsonObj){

  return jsonObj.map(function(breeds){
    DOGS.push(breeds)
    return   `<li> ${breeds} </li>`
  })
}
