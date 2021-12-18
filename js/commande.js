document.querySelectorAll('.pub').forEach(item => {
  item.addEventListener('click', event => {
    if(event.target.classList.contains('btn-public')){
      let active = document.querySelectorAll('.hidder');
      active.forEach(function (act){
        if( act.style.display === 'block'){
                act.style.display = 'none';
                
              }else{
                act.style.display = 'block';
              }
      });
    }
  });
});
const message = document.querySelector('a.btn');
message.addEventListener('click',runrun)
function runrun(e){
  window.location.href = "https://yassrr.github.io/junction/index.html";

  e.preventDefault();
}


// window.addEventListener('scroll', function() {
//   if (window.scrollY > 150) {
//     document.querySelector('#nav-bar').style.opacity = 0.9;
//   } else {
//     document.querySelector('#nav-bar').style.opacity = 1;
//   }
// });


// const taskClick = document.querySelector('.btn-prive');
// taskClick.addEventListener('click',showNewOne);
// function showNewOne(e){
//   document.body.style.opacity = 0.5;
//   document.querySelector('.menu-show').style.display = block;

  
//   e.preventDefault();
// }




