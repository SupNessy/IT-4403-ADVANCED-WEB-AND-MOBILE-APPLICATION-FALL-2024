
function searchBooks() {
  const searchInput = document.getElementById('searchInput').value;
  const encodedSearchInput = encodeURIComponent(searchInput);

  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedSearchInput}`;

  
  fetch(url)
    .then(response => response.json())
    .then(data => displaySearchResults(data.items))
    .catch(error => console.log(error));
}


function displaySearchResults(books) {
  const searchResultsDiv = document.getElementById('searchResults');
  searchResultsDiv.innerHTML = '';

  books.forEach(book => {
    const title = book.volumeInfo.title;
    const coverImage = book.volumeInfo.imageLinks?.smallThumbnail;
    const bookId = book.id;

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const titleLink = document.createElement('a');
    titleLink.textContent = title;
    titleLink.href = `bookDetails.html?id=${bookId}`;

    const coverImg = document.createElement('img');
    coverImg.src = coverImage;
    coverImg.alt = title;

    bookDiv.appendChild(coverImg);
    bookDiv.appendChild(titleLink);
    searchResultsDiv.appendChild(bookDiv);
  });
}


function fetchBookDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get('id');
  const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayBookDetails(data))
    .catch(error => console.log(error));
}


function bookDetails(book) {
  const bookDetailsDiv = document.getElementById('bookDetails');
  bookDetailsDiv.innerHTML = '';

  const titleElement = document.createElement('h2');
  titleElement.textContent = book.volumeInfo.title;

  const authorElement = document.createElement('p');
  authorElement.textContent = `Author: ${book.volumeInfo.authors.join(', ')}`;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = book.volumeInfo.description;

  bookDetailsDiv.appendChild(titleElement);
  bookDetailsDiv.appendChild(authorElement);
  bookDetailsDiv.appendChild(descriptionElement);
}