function press() {
    const button = document.getElementById('press');
    const encodedSearchInput = encodeURIComponent(button);
  
    const site = `https://books.google.com/books/?hl=en&as_coll=0&num=10&uid=109928396846948382199&source=gbs_slider_cls_metadata_0_mylibrary_more`;
  
    
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
  
  
  function FetchDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');
    const site = `https://www.googleapis.com/books/v1/volumes/${bookId}`;
  
    fetch(site)
      .then(response => response.json())
      .then(data => DisplayDetails(data))
      .catch(error => console.log(error));
  }
  
  
  function Details(book) {
    const DetailsDiv = document.getElementById('Details');
    DetailsDiv.innerHTML = '';
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = book.volumeInfo.title;
  
    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${book.volumeInfo.authors.join(', ')}`;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = book.volumeInfo.description;
  
    DetailsDiv.appendChild(titleElement);
    DetailsDiv.appendChild(authorElement);
    DetailsDiv.appendChild(descriptionElement);
  }