fetch ('google-books-book.json')
    .then (res => res.json())
    .then (data => {
        const userInfoDiv = document.getElementById('info');
        userInfoDiv.innerHTML = `
            <p> Authors: ${data.authors}</p>
            <p> Publisher: ${data.publisher}</p>
            <p> Published Date: ${data.publishedDate}</p>
            <p> Page count: ${data.pageCount}</p>
        `;
    })
    .catch(error => console.error('error', error));
;
