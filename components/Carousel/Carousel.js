class Carousel {
    constructor(el) {
        this.el = el;
        this.leftButton = this.el.querySelector(".left-button");
        this.rightButton = this.el.querySelector(".right-button");
        this.images = this.el.querySelectorAll(".c-img");
        this.imageBox = this.el.querySelector(".img-box");
        this.currentIndex = 0; // STARTING INDEX
        this.currentImage = this.el.querySelector(`img[data-index="${this.currentIndex}"]`);

        this.indicatorBox = this.el.querySelector(".indicator-box");
        this.indicatorMaster = this.indicatorBox.querySelector(".indicator[data-index='0']");
        for(let i = 1; i < this.images.length; i++) {
            this.indicatorBox.appendChild(this.indicatorMaster.cloneNode());
        };
        this.clickCatcher = null;
        this.indicatorBox.querySelectorAll(".indicator").forEach(
            (el, i) => {
                el.dataset.index = i;
                el.onclick = () => {this.clickCatcher = i}
            }
        );
        this.indicatorMaster.classList.add("ind-selected")
        this.currentIndicator = this.el.querySelector(`.indicator[data-index="${this.currentIndex}"]`);

        this.leftButton.addEventListener("click", () => {this.slideLeft()});
        this.rightButton.addEventListener("click", () => {this.slideRight()});
        this.indicatorBox.addEventListener("click", () => {this.indicatorClick()});
    };
    
    slideLeft() {
        if(this.currentIndex !== 0) {
            this.currentImage.classList.remove("selected");
            this.currentIndicator.classList.remove("ind-selected");
            this.currentIndex --;
            this.imageBox.style.transform = (`translateX(-${this.currentIndex * 100}%)`);
            this.currentImage = this.el.querySelector(`img[data-index="${this.currentIndex}"]`);
            this.currentIndicator = this.el.querySelector(`.indicator[data-index="${this.currentIndex}"]`);
            this.currentImage.classList.add("selected");
            this.currentIndicator.classList.add("ind-selected");
        }        
    }

    slideRight() {
        if(this.currentIndex !== (this.images.length - 1)) {
            this.currentImage.classList.remove("selected");
            this.currentIndicator.classList.remove("ind-selected");
            this.currentIndex ++;
            this.imageBox.style.transform = (`translateX(-${this.currentIndex * 100}%)`);
            this.currentImage = this.el.querySelector(`img[data-index="${this.currentIndex}"]`);
            this.currentIndicator = this.el.querySelector(`.indicator[data-index="${this.currentIndex}"]`);
            this.currentImage.classList.add("selected");
            this.currentIndicator.classList.add("ind-selected");
        }
    }

    indicatorClick() {
        if (this.clickCatcher === null) {return};
        this.currentImage.classList.remove("selected");
        this.currentIndicator.classList.remove("ind-selected");
        this.currentIndex = this.clickCatcher;
        this.imageBox.style.transform = (`translateX(-${this.currentIndex * 100}%)`);
        this.currentImage = this.el.querySelector(`img[data-index="${this.currentIndex}"]`);
        this.currentIndicator = this.el.querySelector(`.indicator[data-index="${this.currentIndex}"]`);
        this.currentImage.classList.add("selected");
        this.currentIndicator.classList.add("ind-selected");
        this.clickCatcher = null;
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