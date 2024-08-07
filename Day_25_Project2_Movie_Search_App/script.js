// app.js

document.getElementById('searchMovie').addEventListener('click', () => {
    const movieTitle = document.getElementById('movieTitle').value;
    if (!movieTitle) {
        alert('Please enter a movie title.');
        return;
    }

    // Replace with your OMDB API key
    const apiKey = '7a057c92';
    // Correct API URL with movie title included
    const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response data to the console

            const movieResults = document.getElementById('movieResults');
            if (data.Response === 'True') {
                movieResults.innerHTML = `
                    <h2>${data.Title}</h2>
                    <p><strong>Year:</strong> ${data.Year}</p>
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                    <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
                    <img src="${data.Poster}" alt="${data.Title} Poster" style="width:200px;">
                `;
            } else {
                movieResults.innerHTML = `<p>${data.Error}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
            document.getElementById('movieResults').innerHTML = '<p>Error fetching data. Please try again.</p>';
        });
});
