document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const filterDropdown = document.getElementById("breed-dropdown");
  
    // Fetch images
    fetch(imgUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const images = data.message;
        images.forEach(function(imageUrl) {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = "Dog Image";
          imageContainer.appendChild(img);
        });
      })
      .catch(function(error) {
        console.error("Error fetching images:", error);
      });
  
    // Fetch breeds and render them
    fetch(breedUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const breedsObject = data.message;
        const breeds = Object.keys(breedsObject);
        breeds.forEach(function(breed) {
          const listItem = document.createElement("li");
          listItem.textContent = breed;
          breedList.appendChild(listItem);
        });
  
        // Challenge 3: Change font color on click
        breedList.addEventListener("click", function(event) {
          if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change color to blue
          }
        });
      })
      .catch(function(error) {
        console.error("Error fetching breeds:", error);
      });
  
    // Challenge 4: Filter breeds by starting letter
    filterDropdown.addEventListener("change", function(event) {
      const selectedLetter = event.target.value.toLowerCase();
      const breedItems = breedList.getElementsByTagName("li");
      Array.from(breedItems).forEach(function(item) {
        const breedName = item.textContent.toLowerCase();
        if (breedName.startsWith(selectedLetter)) {
          item.style.display = "block"; // Show the breed if it starts with the selected letter
        } else {
          item.style.display = "none"; // Hide the breed otherwise
        }
      });
    });
  });
  
console.log('%c HI', 'color: firebrick')
