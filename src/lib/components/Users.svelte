<script>
  // @ts-nocheck

  let currentPage = 1;
  const itemsPerPage = 7;
  let pagesToShow = 3;
  let data = [
    { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
    { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 3, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 4, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 5, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 6, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 7, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 8, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 89, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 88, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 87, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 857, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 827, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 287, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 877, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 837, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 871, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 847, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 879, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 8723, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 8532157, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 8675727, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 25387, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 8477, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 83247, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 86871, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 843347, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 83979, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 853215, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 867572, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 2538, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 847, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 8324, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 8687, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 84334, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 8397, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 53215, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 67572, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 538, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 47, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 324, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 687, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 4334, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 397, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 8097, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 50215, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 60572, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 508, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 40, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 304, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 607, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 4034, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 307, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 681, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 4314, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 391, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 8017, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 50115, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 60172, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 501, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 401, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 301, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 601, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 4014, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 301, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 2314, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 291, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 2017, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 20115, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 20172, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 201, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 201, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 201, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 201, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 2014, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 201, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 2097, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 20915, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 20972, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 299, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 208, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 209, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 209, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 2094, first: "Larry", last: "Bird", handle: "@twitter" },
    { id: 209, first: "Larry", last: "Bird", handle: "@twitter" },
    // Add more data if needed
  ];

  const setPage=(newPage)=> {
    currentPage = newPage;
  }

  //   function getPages() {
  //   const totalPages = Math.ceil(data.length / itemsPerPage);
  //   const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  //   const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  //   return Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage);
  // }

  const getPages=()=> {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    if (totalPages <= pagesToShow) {
      // If total pages are less than or equal to the desired pages to show,
      // return all pages.
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftOffset = Math.floor(pagesToShow / 2);
    let startPage = Math.max(1, currentPage - leftOffset);
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    // If the current page is near the end, adjust the startPage accordingly.
    if (endPage === totalPages) {
      startPage = Math.max(1, totalPages - pagesToShow + 1);
    }

    return Array.from({ length: pagesToShow }, (_, i) => i + startPage);
  }

  const goToPrevious=()=> {
    if (currentPage > 1) {
      currentPage--;
    }
    // Adjust the page numbers if needed
    if (currentPage < getPages()[0]) {
      setPage(getPages()[0]);
    }
  }

  const goToNext=()=> {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
    }
    // Adjust the page numbers if needed
    if (currentPage > getPages()[getPages().length - 1]) {
      setPage(getPages()[getPages().length - 1]);
    }
  }
  const goToFirst = () => {
    currentPage = 1;
  };
  const goToLast = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    currentPage = totalPages;
  };
</script>

<div class="col-md-5">
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Table</h4>
      <p class="card-category">Users Table</p>
    </div>
    <div class="card-body">
      <table class="table table-head-bg-success table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {#each data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as item}
            <tr>
              <td>{item.id}</td>
              <td>{item.first}</td>
              <td>{item.last}</td>
              <td>{item.handle}</td>
            </tr>
          {/each}
        </tbody>
      </table>
      <nav aria-label="Page navigation" >
        <ul class="pagination">
          <li class="page-item">
            <a href="/" class="page-link" on:click={goToPrevious}>Previous</a>
          </li>
          {#each getPages() as page (page)}
            <li class="page-item {page === currentPage ? 'active' : ''}">
              <a href="/" class="page-link" on:click={() => setPage(page)}
                >{page}</a
              >
            </li>
          {/each}
          <li class="page-item">
            <a href="/" class="page-link" on:click={goToNext}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

<style>
  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
  }

  .page-item {
    margin: 0;
  }

  .page-link1 {
    display: block;
    padding: 0.5rem 0.75rem;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
    margin-right: -1px;
    line-height: 1.25;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0 !important;
  }

  .page-item.active .page-link1 {
    background-color: #007bff;
    color: #fff;
  }

  .page-link:hover {
    z-index: 2;
    color: #0056b3;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }
</style>
