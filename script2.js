fetch ("https://www.googleapis.com/books/v1/volumes?q=modern%20web")
    .then(res => res.json())
    .then(console.log) 

    .catch(error => console.error('error', error));
;
