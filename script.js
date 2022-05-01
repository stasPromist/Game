let runners = {
  dog: {
    "name": "dog",
    "id": "dog",
    "voice": "woof",
    "img": "dog.gif",
    "step": 50

  },
  horse: {
    "name": "horse",
    "id": "horse",
    "voice": "neigh",
    "img": "horse.gif",
    "step": 70
  },
  duck: {
    "name": "duck",
    "id": "duck",
    "voice": "quack",
    "img": "duck.gif",
    "step": 40
  },
  chick: {
    "name": "chick",
    "id": "chick",
    "voice": "cheap",
    "img": "chick.gif",
    "step": 30
  }
};


let btn = document.getElementById("btn");
function alignment() {
  document.getElementById("main-container").style = "display:block";
  btn.remove();
  document.querySelectorAll('.start-go').forEach(el => { el.style.display = "inline" });
}

class clickableElement {
  constructor(initMargin, moveBy, element, button, audio) {
    this.margin = initMargin;
    this.moveBy = moveBy;
    this.element = element;
    this.button = button;
    this.button.addEventListener('click', this.move.bind(this));
    this.audio = audio;
    this.isFirst = true;
   
  }
    move(e) {
    this.margin += this.moveBy;
    this.element.style.marginLeft = `${this.margin}px`;
    // var buttons = document.getElementsByTagName("button");
    // var buttonsCount = buttons.length;
    if (this.isFirst) {
      this.isFirst = false;
      this.button.innerHTML = "GO";
      document.getElementById(e.target.id).disabled = true;
    } else {
      this.audio.play();
      document.getElementById(e.target.id).disabled = true;
    }
    
  }
  changeAnimal(animal) {
    this.element = animal;

  }
  
}
function enable() {
  if(document.getElementById('gamer4').disabled == true && document.getElementById('gamer3').disabled == true
      && document.getElementById('gamer2').disabled == true && document.getElementById('gamer1').disabled == true) {
  document.getElementById('gamer1').disabled = false;
  document.getElementById('gamer2').disabled = false;
  document.getElementById('gamer3').disabled = false;
  document.getElementById('gamer4').disabled = false;
}
}







const myElement1 = new clickableElement(260, 40, document.getElementById('animalImg'), document.getElementById('gamer1'), document.getElementById("myAudioDuck"));
const myElement2 = new clickableElement(270, 30, document.getElementById('animalImg1'), document.getElementById('gamer2'), document.getElementById("myAudioChick"));
const myElement3 = new clickableElement(250, 50, document.getElementById('animalImg2'), document.getElementById('gamer3'), document.getElementById("myAudioDog"));
const myElement4 = new clickableElement(230, 70, document.getElementById('animalImg3'), document.getElementById('gamer4'), document.getElementById("myAudioHorse"));

let newInput = document.getElementById("insert");
let newW = document.getElementById("great");
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  newW.style = "display:block";
}
newW.addEventListener("click", function (e) {
  if (e.target.classList.contains("Great")) {
    newW.style = "display:none";
    newInput.value = e.target.value;
  }
});


let newInput1 = document.getElementById("insert2");
let newW1 = document.getElementById("great1");
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
  newW1.style = "display:block";
}
newW1.addEventListener("click", function (e) {
  if (e.target.classList.contains("Great")) {
    newW1.style = "display:none";
    newInput1.value = e.target.value;
  }
});


let newInput2 = document.getElementById("insert3");
let newW2 = document.getElementById("great2");
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
  newW2.style = "display:block";
}
newW2.addEventListener("click", function (e) {
  if (e.target.classList.contains("Great")) {
    newW2.style = "display:none";
    newInput2.value = e.target.value;
  }
});


let newInput3 = document.getElementById("insert4");
let newW3 = document.getElementById("great3");
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
  newW3.style = "display:block";
}
newW3.addEventListener("click", function (e) {
  if (e.target.classList.contains("Great")) {
    newW3.style = "display:none";
    newInput3.value = e.target.value;
  }
});


let clickHandler = function(e) {
  if(e.textContent === 'HORSE') 
  myElement1.changeAnimal(document.getElementById("animalImg3"));
  document.getElementById("insert").innerHTML = event.target.innerHTML;
  if(e.textContent === 'DOG') {
    myElement1.changeAnimal(document.getElementById("animalImg2"));
    document.getElementById("insert").innerHTML = event.target.innerHTML;
  }
  if(e.textContent === 'CHICK') {
    myElement1.changeAnimal(document.getElementById("animalImg1"));
    document.getElementById("insert").innerHTML = event.target.innerHTML;
  }
  if(e.textContent === 'DUCK') {
    myElement1.changeAnimal(document.getElementById("animalImg"));
    document.getElementById("insert").innerHTML = event.target.innerHTML;
  }
  // document.getElementById("great").remove();
};

let drop = document.getElementById("great");
let filterItem = document.getElementsByTagName("option");
for( let i = 0; i < filterItem.length; i++) {
  let current = filterItem[i];

  current.addEventListener('click', this.clickHandler, false);
};


let clickHandler1 = function(e) {
  if(e.textContent === 'HORSE') 
  myElement2.changeAnimal(document.getElementById("animalImg3"));
  document.getElementById("insert2").innerHTML = event.target.innerHTML;
  if(e.textContent === 'DOG') {
    myElement2.changeAnimal(document.getElementById("animalImg2"));
    document.getElementById("insert2").innerHTML = event.target.innerHTML;
  }
  if(e.textContent === 'CHICK') {
    myElement2.changeAnimal(document.getElementById("animalImg1"));
    document.getElementById("insert2").innerHTML = event.target.innerHTML;
  }
  if(e.textContent === 'DUCK') {
    myElement2.changeAnimal(document.getElementById("animalImg"));
    document.getElementById("insert").innerHTML = event.target.innerHTML;
    document.getElementById("insert2").innerHTML = event.target.innerHTML;
  }
  
  // document.getElementById("great1").remove();
};
let drop2 = document.getElementById("great1");
let filterItem2 = document.getElementsByTagName("option");
for( let i = 0; i < filterItem2.length; i++) {
  let current2 = filterItem2[i];
  current2.addEventListener('click', this.clickHandler1, false);
};


let clickHandler2 = function() {
  document.getElementById("insert3").innerHTML = event.target.innerHTML;
  document.getElementById("great2").remove();
};
let drop3 = document.getElementById("great2");
let filterItem3 = document.getElementsByTagName("option");
for( let i = 0; i < filterItem3.length; i++) {
  let current3 = filterItem3[i];
  current3.addEventListener('click', this.clickHandler2, false);
}
let clickHandler3 = function() {
  document.getElementById("insert4").innerHTML = event.target.innerHTML;
  document.getElementById("great3").remove();
};
let drop4 = document.getElementById("great3");
let filterItem4 = document.getElementsByTagName("option");
for( let i = 0; i < filterItem4.length; i++) {
  let current4 = filterItem4[i];
  current4.addEventListener('click', this.clickHandler3, false);
}
