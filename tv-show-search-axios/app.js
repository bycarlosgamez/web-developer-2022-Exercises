const form = document.querySelector('#searchForm');
form.addEventListener('submit', eve);

async function eve(e){
  e.preventDefault();
  const searchInput = (form.elements.query.value);
  const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput}`);
  getImages(response.data)
  form.elements.query.value = '';
}

const getImages = (shows) => {
  for(let inputShow of shows){
    if(inputShow.show.image){
      const img = document.createElement('img');
      img.src = inputShow.show.image.medium;
      document.body.append(img);
    }
  }
}