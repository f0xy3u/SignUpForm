const form = document.querySelector('form')
const pswrdMatch = document.querySelector('.pswrdMatch')
const pswrdFirst = document.querySelector('#passwordUnconf')
const pswrdSecond = document.querySelector('#passwordConf')
const button = document.querySelector('.submit')

let pswrdCorrect = false

function pswrdCheck() {
    if(pswrdFirst.value != '' && pswrdSecond.value != '') {
        if(pswrdFirst.value === pswrdSecond.value) {
            pswrdMatch.innerText = ''
            pswrdFirst.classList = ''
            pswrdSecond.classList = ''
            pswrdCorrect = true
        }
        if(pswrdFirst.value != pswrdSecond.value) {
            pswrdMatch.innerText = '*Passwords do not match!'
            pswrdFirst.classList = 'notMatched'
            pswrdSecond.classList = 'notMatched'
        }
    }
}

function formSubmitter() {
    if (pswrdCorrect === true) {
        form.submit()
    }
}

pswrdSecond.addEventListener('change', ()=>{pswrdCheck()})
button.addEventListener('click', ()=>{formSubmitter()})