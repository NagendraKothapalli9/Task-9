     jsonData('Available');
     //jsondata fetch js and status function
    async function jsonData(status) {
	    const data = JSON.parse(details);
      console.log(data)
      let products = data.filter(pro => pro.filter === status)
      let card = '';
       
      products.forEach(item => {
         let image =   item.img;
         let name  =   item.name;
         let price =   item.price;
         let discount = parseInt(item.discount);
         let discountPrice = price - (price * (discount/100));                          
         let starcount = item.Rating;
         let colour = item.btn;
         let txt = item.filter;
         let starsrating =  starRating(starcount);
         card +=  `<div class="card swiper-slide bg-white width=100px" >
         <img src="${image}" class="card-img-top py-1 px-1" alt="..." style="width: auto; height: 250px; object-fit:contain;" >
         <div class="card-body text-center ">
         <p class="card-text text-danger fs-5 my-1 fw-bold">${name}</p>
         <p class="card-text my-1 fw-bold font-monospace">Price: <strike>&#8377;${price} </strike>(-${discount}%) </p>
         <p class="card-text  my-1 fs-6 fw-bold font-monospace">Final Price: <span class="fs-4 text-success">&#8377;${discountPrice} </span></p>
         <div class= "star-container" style="color: coral;">${starsrating}</div>
         <button type="button" class="btn my-1 mx-3 select" style="background-color: ${colour}; color:white;">${txt}</button>
         </div>
         </div>`
         

      });
       
      //cards display in swiper
      document.getElementById("display").innerHTML = card;
      sizing();
   
      //stars dynamic rating fun
      function starRating(star){
         let stars = '';
         for (let i = 1;i <= 5;i++){
            if(i <= star) 
               stars += `<i class="bi bi-star-fill"></i>`;
            else 
               stars += `<i class="bi bi-star"></i>`;    
                }
               return stars;
            }
       }
   
   //swiper cards display
   function sizing(){
      
   var swiper = new Swiper(".mySwiper", {
   
      slidesPerView: slidersCount(),
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}
    
    //swiper function for cards in responsive view
   function slidersCount(){                            
        let screen = window.innerWidth;
        let scr;
       
        if( screen < 576){
          scr = 1;
        }
        else if( screen >= 576 && screen < 992){
          scr = 2;
        }
        else if( screen >= 992 && screen < 1200){
          scr = 3;
        }
        else{
          scr = 4;
        }
        return scr;
         }

window.addEventListener('resize', function(event) {
    sizing();
}, true);