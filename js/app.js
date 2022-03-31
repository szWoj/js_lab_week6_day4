document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const bookForm = document.querySelector('#new-item-form');
  bookForm.addEventListener('submit', handleFormSubmit);

  // const deleteBooks = document.createElement("BUTTON");
  // deleteBooks.addEventListener('click', handleForDeleteBooks)
})

const handleFormSubmit = function (event){
  event.preventDefault();
  
  const resultList = document.querySelector('#reading-list')
  const newBook = document.createElement('ul')
  const title = document.createElement('li');
  const author = document.createElement('li')
  const category = document.createElement('li')



  title.textContent = `${event.target.title.value}`;
  author.textContent = `${event.target.author.value}`;
  category.textContent = `${event.target.category.value}`;
  resultList.appendChild(newBook);
  newBook.classList.add('book-class');
  newBook.appendChild(title);
  newBook.appendChild(author);
  newBook.appendChild(category);

  this.reset()

}

