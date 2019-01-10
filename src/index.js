console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
  const imgContainer = document.querySelector("#dog-image-container")
  const breedContainer = document.querySelector("#dog-breeds")
  const dropDown = document.querySelector("#breed-dropdown")

  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
      return response.json()})
    .then(function(parsed){
      parsed.message.map(function(img){
        imgContainer.innerHTML += `<img width="50%"src=${img}>`
    })
  })

  let DOGS = []
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response){
      return response.json()
    })
    .then(function(parsed){
      for (let breeds in parsed.message) {
        breedContainer.innerHTML += `<li>${breeds}</li>`
        DOGS.push(breeds)
      }
    })

  function renderDogs(array){
    breedContainer.innerHTML = ""
    array.map(function(breed){
      breedContainer.innerHTML += `<li>${breed}</li>`
    })
  }

  breedContainer.addEventListener("click", function(event){
    // const colors = ["red", "blue", "green", "yellow", "orange", "green"]
    event.target.style.color = "red"
  })


  dropDown.addEventListener("input", function(event){
    const filteredDogs = DOGS.filter(function(dog){
      return dog[0] === (event.target.value)
    })
    renderDogs(filteredDogs)
  })
})
