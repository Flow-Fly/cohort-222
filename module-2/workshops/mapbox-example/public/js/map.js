const MAPBOX_ACCESS_TOKEN = "YOUR TOKEN GOES HERE"

const main = async () => {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
  const map = new mapboxgl.Map({
    container: 'map',
    center: [-1.703339, 43.416729],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
  })

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const coordinates = [position.coords.longitude, position.coords.latitude];
        map.setCenter(coordinates);
      },
      () => console.log("Your browser doesn't support geolocation")
    )

  } else {
    console.log("Your browser doesn't support geolocation")
  }

  const res = await axios.get("http://localhost:3000/books/json-list");
  console.log(res.data);
  res.data.forEach(book => {
    const popup = new mapboxgl.Popup().setHTML(
      `
        <h4>${book.title}</h4>
        <p>${book.description}</p>
        <a href="/books/${book._id}">See details</a>
      `
    )
    new mapboxgl.Marker({ color: "red"})
    .setLngLat(book.location.coordinates)
    .setPopup(popup)
    .addTo(map);
  })
}

window.addEventListener('load', main);