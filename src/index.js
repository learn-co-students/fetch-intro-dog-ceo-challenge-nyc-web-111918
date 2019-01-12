// The DOMContentLoaded event fires when the initial HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', () => {

// Set global variables of document elements and empty breed array
  const imgContainer = document.querySelector("#dog-image-container")
  const breedContainer = document.querySelector("#dog-breeds")
  const dogDropdown = document.querySelector('#breed-dropdown')
  let breedContainerArray = []




// Render dog breeds if dropdown filter menu is selected
  function renderDogBreeds(breeds) {
      // ???
      breedContainer.innerHTML = ""
        breeds.map(function(breed) {
          breedContainer.innerHTML += `<div><li>${breed}</li></div>`
      })
  }



// AJAX fetch of dog images from database and rendered on DOM
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response) {
    return response.json()
  })
  .then(function(parsed) {
    parsed.message.map(function(img) {
      imgContainer.innerHTML += `<img width="50%" src=${img}>`
    })
  })


// AJAX fetch of dog breed names from database and pushed into empty breed array while rendering to DOM
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(response) {
    return response.json()
  })
  .then(function(parsed) {
    for (let breeds in parsed.message) {
      breedContainerArray.push(breeds)
      breedContainer.innerHTML += `<div><li>${breeds}</li></div>`
    }
  })



// Change color of breed name when selected
  breedContainer.addEventListener('click', function(event) {
    event.target.style.color = 'blue'
  })

// Dropdown menu selects and filters breed names by first letter
  dogDropdown.addEventListener('input', function(event) {
    let filterBreeds = breedContainerArray.filter(function(breed) {
      return breed[0] === (event.target.value)
    })
    renderDogBreeds(filterBreeds)

  })

})
