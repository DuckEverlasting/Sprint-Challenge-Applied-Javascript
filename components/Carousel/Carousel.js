class Carousel {
    constructor(el) {
        this.el = el;
        this.leftButton = el.querySelector(".left-button");
        this.rightButton = el.querySelector(".right-button");
        this.images = el.querySelectorAll(".carousel-img");
        this.images[0].classList.add("visible") // STARTING IMAGE
        this.currentIndex = 0; // STARTING INDEX
        this.currentImage = el.querySelector(`img[data-index="${this.currentIndex}"]`);
        this.leftButton.addEventListener("click", () => {this.moveLeft()});
        this.rightButton.addEventListener("click", () => {this.moveRight()});
    }
    moveLeft() {
        if(this.currentIndex === 0) {
            this.currentIndex = (this.images.length - 1);
        } else {
            this.currentIndex --;
        }
        this.images.forEach(el => el.classList.remove("visible"));
        this.images[this.currentIndex].classList.add("visible");
        console.log(this.currentIndex);
    }

    moveRight() {
        if(this.currentIndex === (this.images.length - 1)) {
            this.currentIndex = 0;
        } else {
            this.currentIndex ++;
        }
        this.images.forEach(el => el.classList.remove("visible"));
        this.images[this.currentIndex].classList.add("visible");
    }
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/