const findBook = () => {
    const searchBook = document.getElementById('search-food');
    const searchText = searchBook.value;
    // Error handle
    if (searchText === "") {
        document.getElementById('error').innerText = "Search field cannot be empty.";
        return;
    }
    // Clear
    document.getElementById('error').innerText = "";
    searchBook.value = '';
    // fetch url
    const url = ` https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data));
}

const searchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerText = ''
    const books=data.docs;
    document.getElementById('total-book').innerText=`Total Books Available:${data.numFound}`
    books.forEach(book => {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col-lg-8 mx-auto m-3">
        <div class="card h-50 p-1">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p> Author: <small> ${book.author_name}</small> </p>
            <p> Publisher: <small> ${book.publisher[0]}</small> </p>
        
          </div>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    })

}












































































// const searchBook=()=>{
//     const searchField=document.getElementById('search-field')
//     const searchText=searchField.value;
//     searchField.value='';
//     fetch(`http://openlibrary.org/search.json?q=${searchText}`)
//     .then(res=>res.json())
//     .then(data=>loadBook(data))
// }

// const loadBook=data=>{
//     console.log(data)
//     const bookContainer=document.getElementById('book-container')
//     const books=data.docs;
//     document.getElementById('total-book').innerText=`Total Books Available${data.numFound}` 
    
//     books.forEach(book=>{
//         // console.log(book)
//         const div =document.createElement('div')
//         div.classList.add('col')
//         div.innerHTML=`
//         <div class="card books-div my-5">
//         <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top">
//         <div class="card-body">
//              <h4 class="card-title">${book.title}</h4>
//              <p> Author: <small> ${book.author_name}</small> </p>
//              <p> Publisher: <small> ${book.publisher[0]}</small> </p>
//              <p>First Published Year: <small> ${book.first_publish_year}</small> </p>
//         </div>
//     </div>
//         `;
//         bookContainer.appendChild(div)
        
//     })
// }







// 888888888888888888888


// const findBook = () => {
//     const searchBook = document.getElementById('search-food');
//     const searchText = searchBook.value;
//     // Error handle
//     if (searchText === "") {
//         document.getElementById('error').innerText = "Search field cannot be empty.";
//         return;
//     }
//     // Clear
//     document.getElementById('error').innerText = "";
//     searchBook.value = '';
//     // fetch url
//     const url = ` https://openlibrary.org/search.json?q=${searchText}`;
//     // console.log(url);
//     fetch(url)
//         .then(res => res.json())
//         .then(data => searchResult(data.docs));
// }

// const searchResult = books => {
//     // const totalResult = document.getElementById('search-results').innerText = About ${data.numFound} results ;
//     // console.log(totalResult);
//     const searchResult = document.getElementById('search-result');
//     searchResult.innerText = ''
//     books.forEach(book => {
//         // console.log(book);
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//            <div class="card books-div">
//                 <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top">
//                 <div class="card-body">
//                      <h4 class="card-title">${book.title}</h4>
//                      <p> Author: <small> ${book.author_name}</small> </p>
//                      <p> Publisher: <small> ${book.publisher[0]}</small> </p>
//                      <p>First Published Year: <small> ${book.first_publish_year}</small> </p>
//                 </div>
//             </div>
//         `;
//         searchResult.appendChild(div);
//     })

// }
