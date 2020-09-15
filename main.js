// const TypeWriter = function (txtElement, words, wait = 300) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 6);
//   this.type();
//   this.isDeleting = false;
// };

// //Type
// TypeWriter.prototype.type = function () {
//   //Take Current Index
//   const current = this.wordIndex % this.words.length;
//   //Take Full Text
//   const fullTxt = this.words[current];

//   //Check if deleting
//   if (this.isDeleting) {
//     //Remove
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     //Add
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }
//   //Insert txt into span element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   //Initial type speed
//   let typeSpeed = 400;
//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   //Check word complete or not
//   if (!this.isDeleting && this.txt === fullTxt) {
//     typeSpeed = this.wait; // pause

//     //set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     //Move next word of the array
//     this.wordIndex++;
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

// //Init on DOM
// document.addEventListener("DOMContentLoaded", init);

// //Init
// function init() {
//   const txtElement = document.querySelector(".txt-type");
//   const words = JSON.parse(txtElement.getAttribute("data-words"));
//   const wait = txtElement.getAttribute("data-wait");

//   //Init TypeWriter
//   new TypeWriter(txtElement, words, wait);
// }

//ES6 Classes
class TypeWriter {
  constructor(txtElement, words, wait = 300) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 6);
    this.type();
    this.isDeleting = false;
  }

  type() {
    //Take Current Index
    const current = this.wordIndex % this.words.length;
    //Take Full Text
    const fullTxt = this.words[current];

    //Check if deleting
    if (this.isDeleting) {
      //Remove
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //Add
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    //Insert txt into span element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Initial type speed
    let typeSpeed = 400;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //Check word complete or not
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait; // pause

      //set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //Move next word of the array
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//Init on DOM
document.addEventListener("DOMContentLoaded", init);

//Init
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  //Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
