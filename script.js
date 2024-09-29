fetch ("https://www.googleapis.com/books/v1/volumes/Wfan6L9RGgYC")
    .then (res => res.json())
    .then (data => {
        const userInfoDiv = document.getElementById('info');
        userInfoDiv.innerHTML = `        
            <p> Title: ${data.volumeInfo.title}</p>
            <p> SubTitle: ${data.volumeInfo.subtitle}</p>
            <p> Authors: ${data.volumeInfo.authors}</p>
            <p> Publishers: ${data.volumeInfo.publisher}</p>
            <p> Description: ${data.volumeInfo.description}</p>
            <p> PageCount: ${data.volumeInfo.pageCount}</p>
            <p> Categories: ${data.volumeInfo.categories}</p>
            <p> Average Rating: ${data.volumeInfo.averageRating}</p>
            <p> Maturity Rating: ${data.volumeInfo.maturityRating}</p>
        `;
    })
    .catch(error => console.error('error', error));
;
