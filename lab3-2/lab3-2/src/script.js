mapboxgl.accessToken = "pk.eyJ1IjoiMjk2NDY0OXQiLCJhIjoiY201d2poODIzMDlxcDJqcXVmcmxoMmxpYyJ9.jSyrcFE5VHf1NZ_FO7tQ3g";
const style_2022 = "mapbox://styles/2964649t/cm6gl6fvg001e01sd58qs3gzl";
const style_2024 = "mapbox://styles/2964649t/cm6glducz004r01s3a27nad21";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: style_2022, // initial style
  center: [-0.089932, 51.514441],
  zoom: 14
});

const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

// On click of the radio button, toggle the style of the map.
for (const input of inputs) {
  input.addEventListener("click", (event) => {
    if (event.target.id === "style_2022") {
      map.setStyle(style_2022);
    }
    if (event.target.id === "style_2024") {
      map.setStyle(style_2024);
    }
  });
}
