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
// "use strict";
if ("geolocation" in navigator) {
  console.log("geolocation available");
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat, lon);
    // document.getElementById("latitude").textContent = lat;
    // document.getElementById("longitude").textContent = lon;

    //     const mymap = L.map("map").setView([lat, lon], 15);
    //     const attribution =
    //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    //     const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    //     const tiles = L.tileLayer(tileUrl, { attribution });
    //     tiles.addTo(mymap);
    //     const marker = L.marker([lat, lon]).addTo(mymap);

    //     var circle = L.circle([lat, lon], {
    //       color: "red",
    //       fillColor: "#f03",
    //       fillOpacity: 0.5,
    //       radius: 500,
    //     }).addTo(mymap);

    //     // sample testing array
    //     array = [
    //       {
    //         lat: 13.19,
    //         lon: 77.706,
    //       },
    //       {
    //         lat: 13.9,
    //         lon: 75.706,
    //       },
    //       {
    //         lat: 12,
    //         lon: 78.706,
    //       },
    //     ];
    //     // location of every place in the array from my location
    //     // for (let index = 0; index < array.length; index++) {
    //     //   L.Routing.control({
    //     //     waypoints: [
    //     //       L.latLng(lat, lon),
    //     //       // L.latLng(57.6792, 11.949),
    //     //       L.latLng(array[index].lat, array[index].lon),
    //     //     ],
    //     //     // routeWhileDragging: true,
    //     //     show: false,
    //     //     draggableWaypoints: false,
    //     //   }).addTo(mymap);
    //     // }

    //     // L.routing
    //     //   .plan([L.latLng(lat, lon), L.latLng(13.1986, 77.7066)])
    //     //   .addTo(mymap);

    //     // way to control directions

    //     L.Routing.control({
    //       waypoints: [L.latLng(lat, lon), L.latLng(13.1986, 77.7066)],
    //       routeWhileDragging: true,
    //       // route: new L.Routing.OSRMv1({
    //       //   waypoints: [L.latLng(lat, lon), L.latLng(10, 77.7066)],
    //       // }),
    //     }).addTo(mymap);

    //     var polygon = L.polygon([
    //       [lat + 0.02, lon - 0.02],
    //       [lat + 0.05, lon - 0.05],
    //       [lat - 0.05, lon - 0.05],
    //     ]).addTo(mymap);
    //   });
    // } else {
    //   console.log("geolocation not available");
    // }
    var map = L.map("map").setView([41.9168, -8.14311], 8);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    var groups = {};

    var layercontrol = L.control.layers(null, groups).addTo(map);

    //var router = L.Routing.osrm({});
    // using the "new", because of the bug on L.Routing.osrmv1
    var router = new L.Routing.OSRMv1({});

    var route1waypoints = [
        L.Routing.waypoint(L.latLng(41.9168, -8.54311)),
        L.Routing.waypoint(L.latLng(41.73251, -8.40248)),
        L.Routing.waypoint(L.latLng(41.63713, -8.66547)),
      ],
      route1plan = L.Routing.plan(route1waypoints);

    router.route(
      route1waypoints,
      function (error, routes) {
        var route1line = L.Routing.line(routes[0]);
        var route1group = L.layerGroup([route1plan, route1line]).addTo(map);
        layercontrol.addOverlay(route1group, "LayerRoute1");
      },
      null,
      {}
    );
  });
}
