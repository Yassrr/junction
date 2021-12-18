const message = document.querySelector('.search-map');
message.addEventListener('click',runrun)
function runrun(e){
  window.location.href = "http://127.0.0.1:5500/junction/commandeDirect.html";

  e.preventDefault();
}

const ret = document.querySelector('.btn');
ret.addEventListener('click',ButtonBtn)
function ButtonBtn(e){
  window.location.href = "https://yassrr.github.io/junction/mainPage.html";
  
  e.preventDefault();
}
