document.addEventListener("DOMContentLoaded" , function(){
    const movieLinks = document.querySelectorAll(".movieLink");
    movieLinks.forEach(function(movieLink){ 
        movieLink.addEventListener('click',function(e) {
            e.preventDefault();
            const movieId = this.getAttribute('data-id');
            localStorage.setItem('selectedMovieId' , movieId)
            window.location.href = './pages/MovieDetails.html'
        })
    })
})