let elSearchForm = $(".form-js");
let elSearchInput = $(".form-input", elSearchForm);
let elChooseList = $(".choose-list");
let elTemplateItem = $("#template-item").content;

kinolar.splice(300);

let normalizedChoose = kinolar.map((kino, i) => {
  return {
    id: i + 1,
    title: kino.title,
    cast: kino.cast.join(", "),
    genres: kino.genres.join(", "),
    year: kino.year,
  }
})

let createMovieElement = function(movie) {
  elChooseList.innerHTML = null;

  let movieElement =  elTemplateItem.cloneNode(true);
  $(".card-title", movieElement).textContent = movie.title;
  $(".card-cast", movieElement).textContent = movie.cast;
  $(".card-genres", movieElement).textContent = movie.genres;
  $(".card-year", movieElement).textContent = movie.year;

  return movieElement;
  
}

let renderMovie = (movie) => {
  let elFig = document.createDocumentFragment();

movie.forEach((movie) => {
  elFig.appendChild(createMovieElement(movie));
})

elChooseList.appendChild(elFig);
}

renderMovie(normalizedChoose);

elSearchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let searchMovie = new RegExp(elSearchInput.value.trim(), "gi");

  let searchTo = normalizedChoose.filter((movie) => {
    if (movie.title.match(searchMovie)) {
      return movie.title.match(searchMovie);
    }
  })

  renderMovie(searchTo);
})