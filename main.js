class TypeWriteName{
    constructor(element, list, typeSpeed = 100){
        this.element = element;
        this.list = list;
        this.typeSpeed = typeSpeed;
        this.isDeleting = false;
        this.counter = 0;
        this.txt = '';
        this.index = 0;
    }

    TypeWrite(){
        const fixedIndex = this.index % this.list.length;
        const word = this.list[fixedIndex];
        this.typeSpeed = 100;
        
        if (!this.isDeleting) {
            this.txt = word.substring(0, this.counter + 1);

            console.log(this.txt);
            document.querySelector('.words-typing').innerHTML = this.txt;

            this.counter++;

            if (this.counter === word.length) {
                this.isDeleting = true;
                this.typeSpeed = 500;
            }

        }else if (this.isDeleting){
            this.txt = word.substring(0, this.counter-1);

            console.log(this.txt);
            document.querySelector('.words-typing').innerHTML = this.txt; 

            this.counter--;

            if (this.counter === 0) {
                this.isDeleting = false;
                this.typeSpeed = 500;
            }
        }

        // jumps to the next word
        if (this.txt === '') {
            console.log('jump to next word');
            this.index++;
        }
        
        setTimeout( () => {
            this.TypeWrite()
        }, this.typeSpeed )
    }
}

document.addEventListener('DOMContentLoaded', initType);

function initType() {
    const element = document.querySelector('.words-typing');
    const list = JSON.parse(element.getAttribute('data-words'));

    const launchOne = new TypeWriteName(element, list);
    launchOne.TypeWrite()
}