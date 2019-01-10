console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dogContainer = document.querySelector('#dog-image-container')
  const ulDogList = document.querySelector('#dog-breeds')
  const alphaDropDown = document.querySelector('#breed-dropdown')
  const alphabet = 'efghijklmnopqrstuvwxyz'.split('')
  const breedsArray = []

  fetch(imgUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonObj) {
      jsonObj.message.forEach(function(image) {
        dogContainer.innerHTML += `<img src="${image}">`
      })
    });

  fetch(breedUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function (jsonObj) {
      Object.keys(jsonObj.message).forEach(function(breed) {
        ulDogList.innerHTML += `<li data-name="${breed}">${breed}: ${jsonObj.message[breed].join(", ")}</li>`
        breedsArray.push(breed)
      })
    })

  ulDogList.addEventListener('click', function(e) {
    const eachDogBreed = document.querySelector(`[data-name=${e.target.dataset.name}]`)
    eachDogBreed.style.color = "red"
  })

  alphabet.forEach(function (letter) {
    alphaDropDown.innerHTML += `<option value="${letter}">${letter}</option>`
  })

  alphaDropDown.addEventListener('change', function(e) {
    const filteredBreeds = breedsArray.filter(function (breed) {
      return breed.startsWith(e.target.value)
    })
    ulDogList.innerHTML = ""
    filteredBreeds.forEach(function (breed) {
      ulDogList.innerHTML += `<li data-name="${breed}">${breed}</li>`
    })
  })

})
