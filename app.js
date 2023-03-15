var form = document.querySelector('form')
var inputElement = document.querySelector('form input')
var eyeBtn = document.querySelector('.form-eye')

eyeBtn.addEventListener('click', (e) => {
    e.target.classList.toggle('show')

    inputElement.type == 'password' ? (inputElement.type = 'text') : (inputElement.type = 'password')
    inputElement.focus()
})

inputElement.addEventListener('input', (e) => {
    var value = e.target.value

    var lowerCase = document.querySelector('.lower-case')
    var upperCase = document.querySelector('.upper-case')
    var number = document.querySelector('.number')
    var symbol = document.querySelector('.symbol')
    var character = document.querySelector('.character')

    value.search(/[a-z]/) >= 0 
        ? lowerCase.classList.add('valid') 
        : lowerCase.classList.remove('valid')

    value.search(/[A-Z]/) >= 0 
    ? upperCase.classList.add('valid') 
    : upperCase.classList.remove('valid')

    value.search(/[0-9]/) >= 0 
        ? number.classList.add('valid') 
        : number.classList.remove('valid')

    value.search(/[!@#$%^&*]/) >= 0 
    ? symbol.classList.add('valid') 
    : symbol.classList.remove('valid')

    value.length >= 8
    ? character.classList.add('valid') 
    : character.classList.remove('valid')
})