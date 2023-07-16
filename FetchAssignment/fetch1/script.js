let container = document.getElementsByClassName("quotes-container")[0];
let quotes;
const userId = "0fd0cb8e3e09405bbe6f456837137a8d";

let fetchQuotes = async () => {
    try {
        let response = await fetch("https://api.jikan.moe/v4/anime");

        if (response.ok) {
            quotes = await response.json();
            // console.log(quotes);
            createIcons()
            // console.log(quotes);
        }
        
        // console.log(response);
        // console.log(data.data);
    }
    catch (error) {
        console.log("Some Error Occurred. Error:", error);
    }
    
}

function createIcons() {
    console.log(quotes.data[0])
    quotes.data.forEach(currentItem => {
        const animeDiv = document.createElement("div");
        animeDiv.className = "card bg-transparent m-1";
        animeDiv.style.display = "inline-block";
        animeDiv.style.height = "450px";

        let animeImage = document.createElement("img");
        animeImage.className = "card-img-top p-1 rounded-4";
        animeImage.style.height = "280px";
        animeImage.style.width = "200px";
        animeImage.src = currentItem.images.webp.image_url;
        animeImage.alt = currentItem.title;

        const animeBodyDiv = document.createElement("div");
        animeDiv.className = "card-body";

        let animeTitle = document.createElement("h5");
        animeTitle.className = "card-title";
        animeTitle.style.width = "200px";
        animeTitle.textContent = currentItem.title;
        animeTitle.style.height = "80px";
        
        let animeRating = document.createElement("p");
        animeRating.className = "card-text";
        animeRating.style.width = "200px";
        animeRating.textContent = currentItem.rating;

        
        let animeDuration = document.createElement("h6");
        animeDuration.className = "card-text";
        animeDuration.style.width = "200px";
        animeDuration.textContent = currentItem.duration;

        animeBodyDiv.appendChild(animeTitle);
        
        animeBodyDiv.appendChild(animeDuration);
        animeBodyDiv.appendChild(animeRating);
        animeDiv.appendChild(animeImage);
        animeDiv.appendChild(animeBodyDiv);
        
       
        container.appendChild(animeDiv);
    });
}

fetchQuotes();