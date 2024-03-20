import { movies } from './movieList.js'; // imported the movies 

document.addEventListener("DOMContentLoaded", () => {
    const selectedMovieId = localStorage.getItem('selectedMovieId');
    const movieTitle = document.querySelector(".movieTitle");
    const movieBy = document.querySelector(".movieBy");
    const movieDec = document.querySelector(".movieDec");
    const movieImage = document.getElementById("movieimage");
    const buying = document.getElementById("buying");
    const addTOCart = document.querySelector("#addTOCart");
    const moviePrice  = 50.99;

    if (selectedMovieId && movies[selectedMovieId]) {
        const movie = movies[selectedMovieId];
        movieTitle.textContent = movie.title;
        movieBy.textContent = movie.by;
        movieDec.textContent = movie.discription;
        movieImage.src = movie.img;

        // Add event listener to "Add to Cart" button
        addTOCart.addEventListener('click', (e) => {
            console.log("clicked");
            // Retrieve movie details from localStorage
            const movieDetails = JSON.parse(localStorage.getItem("movieDetails")) || [];

            // Check if a movie with the same name already exists in movieDetails
            const movieExists = movieDetails.some(existingMovie => existingMovie.name === movie.title);

            if (!movieExists) {
                // If movie does not exist, add it to movieDetails
                movieDetails.push({
                    'name': movie.title,
                    'image': movie.img,
                    'price' : moviePrice
                });
                localStorage.setItem("movieDetails", JSON.stringify(movieDetails));
            } else {
                alert(`Movie "${movie.title}" already exists in the cart.`);
            }

            e.preventDefault();
        });
    } else {
        movieTitle.textContent = 'Movie Not Found !! ';
        movieDec.textContent = " ";
        buying.style.display = "none";
        movieBy.textContent = "";
        movieImage.src = "https://imgs.search.brave.com/egqBNjKYN5g_ABkIqDjtuPpmaY0qlyCmvJN4bfmTjY8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/NDA1OTcwNi92ZWN0/b3Ivd2Vic2l0ZS1w/YWdlLW5vdC1mb3Vu/ZC1lcnJvci00MDQt/b29wcy13b3JyaWVk/LXJvYm90LWNoYXJh/Y3Rlci1wZWVraW5n/LW91dC1vZi1vdXRl/ci1zcGFjZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RHZQ/QVVvZjlVc051TnFD/SnkyWjdaTExrNzVx/REEzYmJMWE9PV181/MHdBaz0";
    }
});
