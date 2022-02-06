// navigator.geolocation.getCurrentPosition((pos) => {
//   pos_var = {
//     lat: pos.coords.latitude,
//     lng: pos.coords.longitude,
//   };
//   console.log(pos_var);
//   return pos_var;
// });

// // function initMap() {
// //   map = new google.maps.Map(document.getElementById("map"), {
// //     center: { lat: -34.397, lng: 150.644 },
// //     zoom: 8,
// //   });
// // }
// // initMap();
// // var L = require("leaflet");
// var map = L.map("map").setView([pos_var.lat, pos_var.lng], 13);
// const attribution =
//   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
// const tiles = L.tileLayer(tileUrl, { attribution });
// tiles.addTo(map);
if ("geolocation" in navigator) {
  console.log("geolocation available");
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat, lon);
    // document.getElementById("latitude").textContent = lat;
    // document.getElementById("longitude").textContent = lon;

    const mymap = L.map("map").setView([lat, lon], 15);
    const attribution =
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);
    const marker = L.marker([lat, lon]).addTo(mymap);

    var circle = L.circle([lat, lon], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(mymap);

    // sample testing array
    array = [
      {
        lat: 13.19,
        lon: 77.706,
      },
      {
        lat: 13.9,
        lon: 75.706,
      },
      {
        lat: 12,
        lon: 78.706,
      },
    ];
    // location of every place in the array from my location
    for (let index = 0; index < array.length; index++) {
      L.Routing.control({
        waypoints: [
          L.latLng(lat, lon),
          // L.latLng(57.6792, 11.949),
          L.latLng(array[index].lat, array[index].lon),
        ],
        routeWhileDragging: true,
      }).addTo(mymap);
    }

    // way to control directions

    // L.Routing.control({
    //   waypoints: [L.latLng(lat, lon), L.latLng(13.1986, 77.7066)],
    //   routeWhileDragging: true,
    // }).addTo(mymap);

    var polygon = L.polygon([
      [lat + 0.02, lon - 0.02],
      [lat + 0.05, lon - 0.05],
      [lat - 0.05, lon - 0.05],
    ]).addTo(mymap);
  });
} else {
  console.log("geolocation not available");
}
