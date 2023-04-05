const lon = document.querySelector("#lon");
const london = document.querySelector("#London");
const par = document.querySelector("#par");
const paris = document.querySelector("#Paris");
const tok = document.querySelector("#tok");
const tokyo = document.querySelector("#Tokyo");

lon.addEventListener("click", function() {
  openCity(london);
});

par.addEventListener("click", function() {
  openCity(paris);
});

tok.addEventListener("click", function() {
  openCity(tokyo);
});

function openCity(cityName) {
  const tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach(element =>{
    element.style.display = "none";
  });
   cityName.style.display = "block";
}


$(document).ready(function() {
  $('.accordion2').click(function() {
    var content = $(this).next('.div-style2');
    if (content.is(':visible')) {
      content.slideUp();
    } else {
      $('.div-style2').slideUp();
      content.slideDown();
    }
  });
});


const accordion = document.querySelectorAll(".accordion");
accordion.forEach(element => {
    element.addEventListener("click", function() {
    const content = this.nextElementSibling;
    const contentChild = content.children;
    if (content.style.display === "block") {
            content.style.display = "none";
    } else {
      accordion.forEach(element => {
        element.nextElementSibling.style.display = "none";
      })
         content.style.display = "block";
    }
  });
});





// const uploadIcon = document.querySelector("#addImage");

// uploadIcon.addEventListener("click", function(){
//     this.previousElementSibling.click();
// });

// uploadIcon.previousElementSibling.addEventListener("change", (e) =>{
//     const { files } = e.target;
//     const body = document.querySelector(".carousel ul");

//     for(let file of files){
//       const fileReader = new FileReader();

//       fileReader.onloadend = (e) => {
//           const { result } = e.target; 
//           const creatImg = document.createElement("li");
//           const img = document.createElement("img");
//           img.src = result;
//           body.appendChild(creatImg);
//       };
      
//       fileReader.readAsDataURL(file);
//   }

// });





const uploadIcon = document.querySelector("#addImage");

uploadIcon.addEventListener("click", function(){
    this.previousElementSibling.click();
});

uploadIcon.previousElementSibling.addEventListener("change", (e) =>{
    const { files } = e.target;
    const carouselUl = document.querySelector(".carousel ul");

    for(let file of files){
      const fileReader = new FileReader();

      fileReader.onloadend = (e) => {
          const { result } = e.target; 
          const creatImg = document.createElement("li");
          const img = document.createElement("img");
          img.src = result;
          creatImg.appendChild(img); 
          carouselUl.appendChild(creatImg); 
      };
      
      fileReader.readAsDataURL(file);
  }

});


