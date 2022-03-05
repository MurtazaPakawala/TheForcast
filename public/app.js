//figuting the location of the user
const geo = navigator.geolocation;
document.querySelector("#find-location-btn").addEventListener("click", get_loc);

function get_loc() {
  geo.getCurrentPosition(
    async (pos) => {
      const data = pos.coords;
      const lon = data.longitude;
      const lat = data.latitude;
      document.querySelector("#lat").textContent = data.latitude;
      document.querySelector("#log").textContent = data.longitude;
      // making the post request to the server

      const send_data = { lon, lat };
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(send_data),
      };

      const res = await fetch("/api", options);
      const data_json = await res.json();
      console.log(data_json);
    },
    (err) => {
      console.log("turn on your location i think" + " " + err);
    }
  );
}
