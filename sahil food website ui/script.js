function addCard(img = "assets/unsplash_MqT0asuoIcU.png" ,title = "Home made pizza", price = "190", rating = "4.5", time = "50-79 min",clas=".home-kitchen-items") {
    let dynaimiccard = ` <div class="food-card">
                    <img src="${img}" alt="">
                    <div class="food-card-details vertical">
                        <div class="horizontal">
                            <div>${title}</div>
                            <div>₹${price}</div>
                        </div>
                        <div class="horizontal food-card-btns">
                            <div class="food-card-rating-time horizontal">
                                <div class="rating horizontal">
                                    <img src="assets/starr.png" alt="">
                                    <div>${rating}</div>
                                </div>
                                <div class="food-card-time">${time}</div>
                            </div>
                            <img src="assets/plusimg.png" alt="">
                        </div>
                    </div>
                </div> `
                if (clas == ".home-kitchen-items") {
                    document.querySelector(clas).innerHTML += dynaimiccard;
                }else{
                    document.querySelector(clas).innerHTML += `<div class="swiper-slide">${dynaimiccard}</div>`;
                }
}
let items = [
    {
        img: "assets/img1.png",
        title: "Home made pizza",
        price: "190",
        rating: "4.5",
        time: "50-79 min"
    },
    {
        img: "assets/img2.png",
        title: "Home made pizza",
        price: "190",
        rating: "4.5",
        time: "50-79 min"
    },
    {
        img: "assets/img3.png",
        title: "Home made pizza",
        price: "190",
        rating: "4.5",
        time: "50-79 min"
    },
    {
        img: "assets/img4.png",
        title: "Home made pizza",
        price: "190",
        rating: "4.5",
        time: "50-79 min"
    },
    {
        img: "assets/img5.png",
        title: "Home made pizza",
        price: "190",
        rating: "4.5",
        time: "50-79 min"
    },
    {
        img: "assets/img6.png",
        title: "Home made pizza",
        price: "190",
        rating: "4.5",
        time: "50-79 min"
    },
    {
        img: "assets/img7.png",
        title: "Home made pizza",
        price: "190",
        rating: "4.5",
        time: "50-79 min"
    },
    {
        img: "assets/img8.png",
        title: "Home made pizza",
        price: "190",
        rating: "4.5",
        time: "50-79 min"
    }
]

for (let i = 0; i < 12; i++) {
    addCard(items[i%8].img, items[i%8].title, items[i%8].price, items[i%8].rating, items[i%8].time);
    addCard(items[i%8].img, items[i%8].title, items[i%8].price, items[i%8].rating, items[i%8].time ,".swiper-wrapper");
}


const swiper = new Swiper('.myswiper', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.right-arrow',
    prevEl: '.left-arrow'
  },
});



const modal = document.getElementById("requestDishModal");
const requestDishBtn = document.querySelector(".requestbtn.horizontal");
const cancelRequestBtn = document.getElementsByClassName("cancel-btn")[0];
const submitRequestBtn = document.getElementsByClassName("submit-btn")[0];

requestDishBtn.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
};

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

cancelRequestBtn.onclick = function () {
  closeModal();
};
submitRequestBtn.onclick = function () {
  closeModal();
};
