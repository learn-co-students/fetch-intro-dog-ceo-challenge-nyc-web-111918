console.log('%c HI', 'color: firebrick')

// // Add javascript so that
//
// on page load
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array

breeds = []

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded')

  const dogContainer = document.querySelector('#dog-image-container')

  fetch(imgUrl, {method: 'get'} )
    .then(function(response) {
      return response.json()
    })
    .then(function(obj) {
      obj.message.forEach(function(image) {
        dogContainer.innerHTML += `
        <img src="${image}">
        `
      })
    })

    // After the first challenge is completed, add javascript so that:
    //
    // on page load, fetch all the dog breeds using the url above ⬆️
    // add the breeds to the page in an <ul> (take a look at the included index.html)


    const breedContainer = document.querySelector('#dog-breeds')

    fetch(breedUrl, {method: 'get'})
      .then(function(response) {
        return response.json()
      })
      .then(function(obj) {
        Object.keys(obj.message).forEach(function(breed) {
        breeds.push(breed)
        breedContainer.innerHTML += `
        <li data-name="${breed}"> ${breed} </li>
        `
      })
    })

  //       Once all of the breeds are rendered in the <ul>, add javascript so that the font color of a particular <li> changes on click. This can be a color of your choosing.
  //
  // When the user clicks any of the dog breed list items, the color the text should change.

    breedContainer.addEventListener('click', function(e) {
      const breedHTML = breedContainer.querySelector(`[data-name="${e.target.dataset.name}"]`)

      breedHTML.style.color = 'red'


    })


    // Once we are able to load all of the dog breeds onto the page, add javascript so that the user can filter breeds that start with a particular letter using a dropdown.
    //
    // For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet

  const breedDropdown = document.querySelector('#breed-dropdown')
  const alphabetArray = 'efghijklmnopqrstuvwxyz'.split('')

  alphabetArray.forEach(function(letter){
    breedDropdown.innerHTML += `<option value="${letter}">${letter}</option>`
  })

  breedDropdown.addEventListener('change', function(e) {
    const filteredBreeds = breeds.filter(function(breed){
      return breed.startsWith(e.target.value)
    })
    breedContainer.innerHTML = ""
    filteredBreeds.forEach(function(breed){
      breedContainer.innerHTML += `
      <li data-name="${breed}"> ${breed} </li>
      `
    })
  })


  }) //END OF DOM CONTENT LOADED
