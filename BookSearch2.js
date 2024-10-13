

function search() {
  const searchInput = document.getElementById('searchInput').value;
  const encodedSearchInput = encodeURIComponent(searchInput);
  let page = 1

  const site = `https://www.googleapis.com/books/v1/volumes?q=${encodedSearchInput}&startIndex=${(page -1)*10}&maxResults=10`;

  
  fetch(site)
    .then(response => response.json())
    .then(data => Results(data.items))
    .catch(error => console.log(error));
}


function Results(books) {
  const searchResultsDiv = document.getElementById('Results');
  searchResultsDiv.innerHTML = '';

  books.forEach(book => {
    const title = book.volumeInfo.title;
    const coverImage = book.volumeInfo.imageLinks?.smallThumbnail;
    const Id = book.id;

    const Div = document.createElement('div');
    Div.classList.add('book');

    const titleLink = document.createElement('a');
    titleLink.textContent = title;
    titleLink.href = `bookDetails.html?id=${Id}`;

    const coverImg = document.createElement('img');
    coverImg.src = coverImage;
    coverImg.alt = title;

    Div.appendChild(coverImg);
    Div.appendChild(titleLink);
    searchResultsDiv.appendChild(Div);
  });
}


function FetchDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get('id');
  const site = `https://www.googleapis.com/books/v1/volumes/${bookId}`;


}


function Details(book) {
  const DetailsDiv = document.getElementById('Details');
  DetailsDiv.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = book.volumeInfo.title;

  const author = document.createElement('p');
  author.textContent = `Author: ${book.volumeInfo.authors.join(', ')}`;

  const description = document.createElement('p');
  description.textContent = book.volumeInfo.description;

  DetailsDiv.appendChild(title);
  DetailsDiv.appendChild(author);
  DetailsDiv.appendChild(description);
}

function page() {
  page = parseInt($('next')).value();
  search()
}