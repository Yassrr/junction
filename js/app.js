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
  window.location.href = "https://yassrr.github.io/junction/index.html";

  e.preventDefault();
}
