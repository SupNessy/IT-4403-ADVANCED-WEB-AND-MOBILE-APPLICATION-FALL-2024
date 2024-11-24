fetch ('google-books-search.json')
    .then (res => res.json())
    .then (data => {
        const userInfoDiv = document.getElementById('info');
        userInfoDiv.innerHTML = `        
            <p> Title: ${data.title}</p>
            <p> SubTitle: ${data.subtitle}</p>
            <p> Authors: ${data.authors}</p>
            <p> Publishers: ${data.publisher}</p>
            <p> Description: ${data.description}</p>
            <p> PageCount: ${data.pageCount}</p>
            <p> Categories: ${data.categories}</p>
            <p> Average Rating: ${data.averageRating}</p>
            <p> Maturity Rating: ${data.maturityRating}</p>
        `;
    })
    .catch(error => console.error('error', error));
;
