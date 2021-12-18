let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.75, lng: 2.9833 },
    zoom: 14,
  });
}
const loc = { lat: 36.75, lng: 2.9833 };

let btn = document.querySelector('btn');
btn.addEventListener('click',function(){

});

document.querySelector('btn').addEventListener('click',runrun);
function runrun(e){
  window.location.href = "http://127.0.0.1:5500/junction/index.html";

  e.preventDefault();
}