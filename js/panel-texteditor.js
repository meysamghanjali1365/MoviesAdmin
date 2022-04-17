// add new article texteditor start here
// Ø§ÛŒÙ† ÙØ§ÛŒÙ„ Ø¨Ø±Ø§ÛŒ Ø³Ø§Ø®Øª ØªÚ©Ø³Øª Ø§Ø¯ÛŒØªÙˆØ± ØµÙØ­Ù‡ Ø§Ø¶Ø§ÙÙ‡ Ú©Ø±Ø¯Ù† Ù…Ù‚Ø§Ù„Ù‡ Ø¯Ø± Ù¾Ù†Ù„ Ù…ÛŒØ¨Ø§Ø´Ø¯

const addNewArticle = document.querySelector('#add-new-article')
addNewArticle.addEventListener('submit', (e) => {
    e.preventDefault()
})

let defaultFontSize = 16
const textArea = document.querySelector('#article-text-area')

function isActive(butt) {
    return document.querySelector('.' + butt).classList.toggle('active-tool');
}

const color = (colorId) => {
    textArea.style.color = colorId
}

const smallFont = () => {
    defaultFontSize -= 2
    textArea.style.fontSize = defaultFontSize + 'px'
}

const bigFont = () => {
    defaultFontSize += 2
    textArea.style.fontSize = defaultFontSize + 'px'
}

const boldFont = () => {
    if (isActive("bold")) {
        textArea.style.fontWeight = "bold"
    } else {
        textArea.style.fontWeight = "normal"
    }
}

const italicFont = () => {
    if (isActive("italic")) {
        textArea.style.fontStyle = "italic"
    } else {
        textArea.style.fontStyle = "normal"
    }
}

function textAlign(pos) {
    textArea.style.textAlign = pos;
}

const textLeft = () => {
    if (isActive("leftText")) {
        textAlign('left')
    }
    if (document.querySelector('.centerText').classList.contains('active-tool')) {
        isActive('centerText')
    }
    if (document.querySelector('.rightText').classList.contains('active-tool')) {
        isActive('rightText')
    }
    else {
        textAlign('left')
    }
}

const textCenter = () => {
    if (isActive('centerText')) {
        textAlign('center')
    }
    if (document.querySelector('.leftText').classList.contains('active-tool')) {
        isActive('leftText')
    }
    if (document.querySelector('.rightText').classList.contains('active-tool')) {
        isActive('rightText')
    }
    else {
        textAlign('center')
    }
}

const textRight = () => {
    if (isActive('rightText')) {
        textAlign('right')
    }
    if (document.querySelector('.centerText').classList.contains('active-tool')) {
        isActive('centerText')
    }
    if (document.querySelector('.leftText').classList.contains('active-tool')) {
        isActive('leftText')
    }
    else {
        textAlign('right')
    }
}

// emojy tool
// Ø§Ø¨Ø²Ø§Ø± Ø§ÛŒÙ…ÙˆØ¬ÛŒ
const emojyCr = document.querySelector('.emojy-cr')
const emojyMask = document.querySelector('.mask')
const emojyTool = document.querySelector('.emojy-tool')

const emojy = () => {
    emojyMask.style.display = 'block'
    emojyMask.style.transform = 'scale(1)'
    emojyMask.style.background = 'rgba(0,0,0,.4)'
    emojyCr.classList.toggle('emojy-cr-on')
    emojyTool.classList.add('active-tool')

    emojyMask.addEventListener('click', () => {
        emojyMask.style.display = 'none'
        emojyCr.classList.remove('emojy-cr-on')
        emojyTool.classList.remove('active-tool')
    })
}
// emojy tool

// add Event for all emojy
const allEmojyis = document.querySelectorAll('.emojy-cr span')

const pickEmojy = (event) => {
    textArea.value += event.target.textContent
}

allEmojyis.forEach(icon => {
    icon.addEventListener('click', pickEmojy)
})
// add Event for all emojy

// paste link validation and input
const pasteLinkContainer = document.querySelector('.pasteUrl-input')
const pasteLinkInput = document.querySelector('#url-pasted-input')
const pasteLinkBtn = document.querySelector('#paste-link-btn')
const urlValidion = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
const myRegex = new RegExp(urlValidion)

const pasteLink = () => {
    isActive('pastelink')
    pasteLinkContainer.classList.toggle('pasteUrl-input-on')

    let err = document.createElement('div')
    pasteLinkContainer.appendChild(err)


    pasteLinkBtn.addEventListener('click', () => {
        if (pasteLinkInput.value.match(myRegex)) {
            textArea.value += ' ' + pasteLinkInput.value + ' ';
            pasteLinkInput.value = ''
            err.innerHTML = ''
        } else if (pasteLinkInput.value === "") {
            err.innerHTML = '<p class="red100">Ù„Ø·ÙØ§ Ø¢Ø¯Ø±Ø³ Ø±Ø§ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯</p>'
        } else {
            err.innerHTML = '<p class="red100">Ø¢Ø¯Ø±Ø³ ÙˆØ§Ø±Ø¯ Ø´Ø¯Ù‡ ØºÛŒØ± Ù…Ø¹ØªØ¨Ø± Ù…ÛŒ Ø¨Ø§Ø´Ø¯</p>'
        }
    })
}
// paste link validation and input

// open tools button
const openTool = document.querySelector('#open-tools')
const allTools = document.querySelectorAll('.tool')

const openTools = () => {
    allTools.forEach(tool => {
        tool.classList.toggle('tools-opened')
    })
}

openTool.addEventListener('click', openTools)
// open tools button

// ///
// End