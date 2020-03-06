const changeTitle = document.getElementById('title')
const changeMessage = document.getElementById('message')
const displayTitle = document.getElementById('display-title')
const displayMessage = document.getElementById('display-message')

const TitleColor = document.getElementById('title-color')
const MessageColor = document.getElementById('message-color')

const TitleSize = document.getElementById('title-size')
const MessageSize = document.getElementById('message-size')

const TitleFont = document.getElementById('title-font')
const MessageFont = document.getElementById('message-font')

changeTitle.addEventListener("input", function(){
    displayCard()
})

changeMessage.addEventListener("input", function(){
    displayCard()
})

TitleColor.addEventListener("input",function(){
    displayCard()
})

MessageColor.addEventListener("input",function(){
    displayCard()
})

TitleSize.addEventListener("input",function(){
    displayCard()
})

MessageSize.addEventListener("input",function(){
    displayCard()
})

TitleFont.addEventListener("input",function(){
    displayCard()
})

MessageFont.addEventListener("input",function(){
    displayCard()
})
function displayCard(){
    displayTitle.innerHTML = changeTitle.value
    displayMessage.innerHTML = changeMessage.value

    displayTitle.style.color = TitleColor.value
    displayMessage.style.color = MessageColor.value

    displayTitle.style.fontSize = `${TitleSize.value}px`
    displayMessage.style.fontSize = `${MessageSize.value}px`

    displayTitle.style.fontFamily =`${TitleFont.value}`
    displayMessage.style.fontFamily = `${MessageFont.value}`
}