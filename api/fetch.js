fetch('./restaurantes.json')
  .then(res => res.json())
  .then(list => console.log(list))
  