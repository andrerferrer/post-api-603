// an event listener on the input
const input = document.getElementById('search');
input.addEventListener('keyup', (event) => {
  // every time that I type a key
  // console.log(event.currentTarget.value);
  const searchedCity = event.currentTarget.value;
  console.log(searchedCity);
  // fetch the api, receive the response and update the dom
  const apiURL = `https://places-1.algolianet.com/1/places/query`
  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify({ query: searchedCity })
  })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.hits);
      console.log(data.hits[0]);
      console.log(data.hits[0].locale_names);
      console.log(data.hits[0].locale_names.default);
      console.log(data.hits[0].locale_names.default[0]);
      const resultCityName = data.hits[0].locale_names.default[0];
      document.getElementById('result').innerText = resultCityName;
    });
});
