const MAPBOX_ACCESS_TOKEN = "Your token goes here"

const main = async () => {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
  const map = new mapboxgl.Map({
    container: 'map',
    center: [-1.703339, 43.416729],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
  })

  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  });
  map.addControl(
    geocoder
  );

  // Listener that fires every time you get a search result
  geocoder.on('result', function(e) {
    console.log(e.result.center);
    const lngInput = document.querySelector('#longitude');
    const latInput = document.querySelector('#latitude');

    lngInput.value = e.result.center[0];
    latInput.value = e.result.center[1];
  })

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const coordinates = [position.coords.longitude, position.coords.latitude];
        new mapboxgl.Marker({ color: "blue" })
          .setLngLat(coordinates)
          .addTo(map);

        map.setCenter(coordinates);
      },
      () => console.log("Your browser doesn't support geolocation")
    )

  } else {
    console.log("Your browser doesn't support geolocation")
  }
}

window.addEventListener('load', main);