console.log('%c HI', 'color: firebrick')

// Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const fetchDogs = fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(parsedDogs) {
    dogContainer = document.querySelector("#dog-image-container")
    parsedDogs.message.forEach(function(element) {
      dogContainer.innerHTML += `<img src=${element}>`
    })
  })

fetchDogs

// Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// const breedsList = document.querySelector("#dog-breeds")


const fetchBreeds = fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(parsedBreeds) {
    const breedsList = document.querySelector("#dog-breeds")
    const breedsObj = parsedBreeds.message
    for (let key in breedsObj) {
      breedsList.innerHTML += `<li><p style="color: black">${key}</p></li>`
    }
    // Object.keys(breedsObj).forEach(function(breed) {
    //   breedsList.innerHTML += `<li>${breed}</li>`
    // })
  })

  // Challenge 3
//
document.addEventListener('DOMContentLoaded', () => {

  const breedContainer = document.querySelector("#dog-breeds")
  document.querySelector("#dog-breeds").addEventListener("click", function(e){
    if (e.target.tagName === "P") {

      e.target.style.color = 'red'
    }
  })

//Challenge 4
  const dropDownButton = document.querySelector("#breed-dropdown")

  dropDownButton.addEventListener("change", function(e) {
    console.log(e.target.value)
    fetch(breedUrl)
        .then(function(response) {
          return response.json();
        })
        .then(function(parsedBreeds) {
          const breedsObj = parsedBreeds.message
          const breedsArr = Object.keys(breedsObj)
          // console.log(breedsArr)
          let filteredBreeds = breedsArr.filter(breed => breed.startsWith(e.target.value));
          // console.log(filteredBreeds)
          document.querySelector("#dog-breeds").innerHTML = ""
          filteredBreeds.map(function(breed) {
            document.querySelector("#dog-breeds").innerHTML += `<li><p style="color: black">${breed}</p></li>`
          })
        })
  })
// dropDownButton.onchange = function(letter) {
//   fetch(breedUrl)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(parsedBreeds) {
//       const breedsObj = parsedBreeds.message
//       return breedsArr = Object.keys(breedsObj)
//       breedsArr.filter(breed => breed.includes(letter))
//     })
// }

})
