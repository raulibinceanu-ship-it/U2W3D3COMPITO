const API_URL = "https://striveschool-api.herokuapp.com/books";
const booksContainer = document.getElementById("books-container");

fetch(API_URL)
  .then((response) => response.json())
  .then((books) => {
    books.forEach((book) => {
      //Colonna
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

      //Card
      col.innerHTML = `
        <div class="card h-100">
          <img src="${book.img}" class="card-img-top" alt="Copertina libro">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Prezzo: <strong>${book.price}€</strong></p>
            <button class="btn btn-danger mt-auto scarta-btn">Scarta</button>
          </div>
        </div>
      `;

      //Bottone scarta
      col.querySelector(".scarta-btn").addEventListener("click", () => {
        col.remove();
      });
      booksContainer.appendChild(col);
    });
  })
  .catch((error) => console.error("Errore nel caricamento:", error));
