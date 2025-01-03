const head=document.getElementById("myHeader");
window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        head.classList.add("sticky");
    }
    else{
        head.classList.remove("sticky");
    }
});

// const head=document.getElementById("myHeader");
// var sticky=head.offsetTop;
// window.onscroll = function (){
//     if(window.pageYOffset>sticky){
//         head.classList.add("sticky");
//     }
//     else{
//         head.classList.remove("sticky");
//     }
// }

// window.onscroll = function() {myFunction()};

// var head = document.getElementById("myHeader");
// var sticky = head.offsetTop;

// function myFunction() {
//   if (window.scrollY > sticky) {
//     head.classList.add("sticky");
//   } else {
//     head.classList.remove("sticky");
//   }
// }