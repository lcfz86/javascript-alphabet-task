// const alphabet = [
//   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
// ];

// const alphabet = [
//   'a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z'
// ];

// const alphabet = [
//   'abcdefghijklmnopqrstuvwxyz'
// ];

const alphabet = [
  '--------------------------', 'abcdefghijklmnopqrstuvwxyz'
];

let alphaBox = alphabet[0];
let selectedBox;

document.addEventListener('DOMContentLoaded', function() {

  setBox(alphaBox);

  qsa('input[name]').forEach(function(e) {
    e.addEventListener('change', function(event) {
      setBox(alphaBox)
    })
  })
})

document.addEventListener('keydown', function(e) {
  if (selectedBox != null) {
    console.log(isNaN(parseInt(e.key)))
    if (isNaN(parseInt(e.key))) {
      selectedBox.innerHTML = e.key;

      if (checkAnswer(selectedBox)) {
        selectedBox.classList.remove('selected');
        selectedBox = null;
      } else {
        selectedBox.classList.add('incorrect');

        setTimeout(function() {

          selectedBox.classList.remove('incorrect', 'selected');

          selectedBox.innerHTML = '';
          selectedBox = null;
        }, 1000);
      }
    }
  }
})

function setBox(alphaBox) {

  let idCount = 0;

  for (let i=0; i<26; i++) {
    let box = document.createElement('p');

    box.id = idCount;

    idCount ++;

    box.classList.add('boxes');

    // console.log(alphaBox.charAt(i))

    if (alphaBox.charAt(i) != '-') {
      // box.innerHTML = alphaBox.charAt(i);
    }  else {
      box.addEventListener('click', function() {
        if(box.classList.contains('selected')) {
          box.classList.remove('selected');
          selectedBox = null;
        } else {
          for (let i=0; i<26; i++) {
          qsa('.boxes')[i].classList.remove('selected');
        }
          box.classList.add('selected');
          selectedBox = box;
        }
      })
    }

    id('alphaBox').appendChild(box);
  }
}

function checkAnswer(box) {
  let answer = alphabet[1];

  if (answer.charAt(box.id) === box.innerHTML) {
    return true;
  } else {
    return false;
  }
}

function id(id) {
  return document.getElementById(id)
}

function qsa(selector) {
  return document.querySelectorAll(selector);
}
