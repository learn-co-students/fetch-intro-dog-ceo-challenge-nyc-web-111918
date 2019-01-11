console.log('%c HI', 'color: firebrick')

let DOGBREEDS = []

document.addEventListener("DOMContentLoaded", () => {

  const dogBreeds = document.querySelector('#dog-breeds');
  const breedDropdown = document.querySelector('#breed-dropdown');

// CHALLENGE 1
  // function renderImages(imgList) {
  //   // console.log(imgList);
  //   imgList.message.forEach( (imgURL) => {
  //     dogBreeds.innerHTML += `<li>Breed Name: ${imgURL.split("/")[4]}</li><img src="${imgURL}">`
  //   });
  // };
  //
  // fetch('https://dog.ceo/api/breeds/image/random/4')
  // .then( (response) => {
  //   return response.json();
  // })
  // .then( (data) => {
  //   // console.log(data);
  //   renderImages(data)
  // });

//CHALLENGE 2 & 3
  // function renderBreeds(breedList) {
  //   // console.log(typeof(breedList.message));
  //   for (let breed in breedList.message){
  //     // console.log(breed);
  //     dogBreeds.innerHTML += `<li>${breed}</li>`
  //   }
  // };
  //
  // fetch('https://dog.ceo/api/breeds/list/all')
  // .then( (response) => {
  //   return response.json();
  // })
  // .then( (data) => {
  //   // console.log(data);
  //   renderBreeds(data)
  // });

  //CHALLENGE 3
  // dogBreeds.addEventListener("click", (e) => {
  //     // console.log(e.target.li);
  //     if (e.target.tagName === 'LI') {
  //         // console.log(e.target.tagName);
  //         e.target.style.color = '#fff'
  //       };
  //     });



  function buildBreedList(apiBreeds) {
    // console.log(typeof(apiBreeds.message));
    for (let breed in apiBreeds.message){
      // console.log(breed);
      DOGBREEDS.push(breed)
    }
  };

  function renderBreedList(breedList) {
    dogBreeds.innerHTML=""
    // console.log(typeof(breedList.message));
    breedList.forEach( (breed) => {
      console.log(breed);
      dogBreeds.innerHTML += `<li>${breed}</li>`
    });
  };

  fetch('https://dog.ceo/api/breeds/list/all')
  .then( (response) => {
    // if (response.ok) {
      return response.json();
    //
    // } else
    //
  })
  .then( (data) => {
    // console.log(data);
    buildBreedList(data)
    renderBreedList(DOGBREEDS)
  });

  breedDropdown.addEventListener("change", (e) => {
    let filteredList = DOGBREEDS.filter( (breed) => {
      return breed[0] === e.target.value
    })
    // dogBreeds.innerHTML = renderBreedList(filteredList)
    renderBreedList(filteredList)
  })


// console.log(DOGBREEDS);



}); // end of DOMContentLoaded
