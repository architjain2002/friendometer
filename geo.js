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
  });
} else {
  console.log("geolocation not available");
}
