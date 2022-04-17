// this file for social media icons page on panel 
const iconsRow = document.querySelectorAll('[data-icons]')
const selectIcon = document.querySelector('#select-icon')
const icons = document.querySelectorAll('.icons li')
const iconSelectBox = document.querySelector('.icon-select-box')
const iconSelectBoxList = document.querySelectorAll('.icon-select-box li')
const closeSelectBox = document.querySelector('.close-select-box')

selectIcon.addEventListener('click', () => {
    icons.forEach(icon => {
        icon.classList.add('icons-on')
        icon.addEventListener('click', (event) => {
            let catchIcon = event.target.className;

            function selectRow(row) {
                iconsRow[row].className = catchIcon
            }

            iconSelectBox.classList.add('icon-select-box-on');
            closeSelectBox.addEventListener('click', () => { iconSelectBox.classList.remove('icon-select-box-on') })

            iconSelectBoxList.forEach(list => {
                list.addEventListener('click', (event) => {
                    if (event.target.hasAttribute('data-row-1')) {
                        selectRow(0)
                    }
                    if (event.target.hasAttribute('data-row-2')) {
                        selectRow(1)
                    }
                    if (event.target.hasAttribute('data-row-3')) {
                        selectRow(2)
                    }
                    if (event.target.hasAttribute('data-row-4')) {
                        selectRow(3)
                    }
                })
            })
        })
    })
    selectIcon.style.display = 'none'
})
