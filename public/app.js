// if ("geolocation" in navigator) {
//   console.log("yes  available");

//   const geo = navigator.geolocation;

//   geo.getCurrentPosition((pos) => {
//     console.log(pos.coords.latitude);
//     console.log(pos.coords.longitude);
//   });
// } else {
//   console.log("not available");
// }
const geo = navigator.geolocation;
geo.getCurrentPosition(
  (pos) => {
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    document.querySelector("#lat").textContent = pos.coords.latitude;
    document.querySelector("#log").textContent = pos.coords.longitude;
  },
  (err) => {
    console.log("turn on your location i think" + " " + err);
  }
);
