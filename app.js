const input = document.getElementById('input');
const button = document.querySelector('.btn');
let output = document.querySelector('.text');
input.addEventListener('focus', clear);
button.addEventListener('click', reverseString);

function clear() {
  input.value = '';
  input.style.color = '#333';
  output.innerText = 'Reversed string will be displayed here...';
  output.style.color = '#ccc';
}

function reverseString(str) {
  let splitted = [];
  let reversed = [];
  let final = '';
  str = input.value;
  splitted = str.split('');

  while (splitted.length > 0) {
    let temp = splitted.pop();
    reversed.push(temp);
  }
  for (let i = 0; i < reversed.length; i++) {
    final += reversed[i];
  }
  output.innerText = final;
  output.style.color = '#333';
}

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    button.click();
    input.blur();
  }
});
