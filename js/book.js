const searchBook=()=>{
    const searchField=document.getElementById('search-field')
    const searchText=searchField.value;
    searchField.value='';
    fetch(`http://openlibrary.org/search.json?q=${searchText}`)
    .then(res=>res.json())
    .then(data=>loadBook(data))
}

const loadBook=data=>{
    // console.log(books)
    const bookContainer=document.getElementById('book-container')
    const books=data.docs;
    document.getElementById('total-book').innerText=`Total Books Available${data.numFound}` 
    
    books.forEach(book=>{
        console.log(book)
        const div =document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div class="col my-5">
      <div class="card h-100 border-0 shadow-lg rounded">
          <div style="background-color: #f1f1f1;" class="m-4 rounded">
           <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top"  width="100" height="500">
       </div>
        <div class="card-body gy-5">
          <h5 class="card-title">Book Name: ${book.title_suggest}</h5>
          <h4>${book.author_name}</h4>
          <h4>First Publish: ${book.first_publish_year}</h4>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         
        </div>
        
      </div>
    </div>
        `;
        bookContainer.appendChild(div)
        
    })
}