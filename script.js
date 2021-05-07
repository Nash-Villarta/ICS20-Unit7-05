document.getElementById('button').addEventListener('click', calculate)
let userage = 0
let userday = 'userday'

function calculate () {
  userday = document.getElementById('inputday').value
  userage = document.getElementById('inputage').value
  userage = parseInt(userage)
  if ((userday === 'Sunday') || (userday === 'Saturday')) {
    document.getElementById('textbox').innerHTML = 'You have a break!'
  } else if (userage > 18) {
    document.getElementById('textbox').innerHTML = 'You have to go to work!'
  } else if (userage <18) {
    document.getElementById('textbox').innerHTML = 'You have to go to school!'
  }
}
