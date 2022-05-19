window.onload = async () => {
  // const response = await axios.get('http://localhost:3000/books/json-list');
  // console.log(response);

  const generateBooks = async () => {
    const deleteButtons = document.querySelectorAll('.delete-button');
    const container = document.querySelector('#books-container');
    deleteButtons.forEach(button => {
      button.addEventListener('click', async (event) => {
        // Getting the id of the book
        const id = event.currentTarget.children[0].innerHTML;

        // Deleting the book
        await axios.post(`http://localhost:3000/books/${id}/delete`);

        // Getting the books from database
        const response = await axios.get('http://localhost:3000/books/json-list');

        // Deleting DOM content
        container.innerHTML = "";

        // Re-painting DOM content
        response.data.forEach((book) => {
          container.innerHTML += `
        <div class="book-row">
          <a href="/books/${book._id}">${book.title}</a>
          <div class="action-links">
            <button type="submit" class="btn btn-warning delete-button">Delete <span class="hide">${book._id}</span></button>
          </div>
        </div>
        `;
        })

        generateBooks();
      })
    })
  }

  // This will be executed when the page loads for the firs time
  generateBooks();

  const printChart = (labels, data) => {
    const ctx = document.querySelector('#myChart').getContext('2d');
    console.log(ctx);
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Books rating",
            backgroundColor: "blue",
            data
          }
        ]
      }
    })
  }

  const res = await axios.get('http://localhost:3000/books/json-list');
  const labels = res.data.map(book => book.title);
  const data = res.data.map(book => book.rating);

  printChart(labels, data);
}