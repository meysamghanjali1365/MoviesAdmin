// flixmovie panel scripts

// active links base on url
window.addEventListener('load', function () {
    let all__Links = document.querySelectorAll('.admin__actions__link'),
        z = 0; len = all__Links.length,
            full_path = location.href.split('#')[0];

    for (; z < len; z++) {
        if (all__Links[z].href.split('#')[0] == full_path) {
            all__Links[z].className += ' active__panel__link';
        }
    }
})

// open collapse menu dropdown on panel navigation
const panelDropdown = document.querySelectorAll('[data-dropdown-panel="true"]');

function openPanelDropdown() {
    this.classList.toggle('admin__action__active');

    if (this.nextElementSibling.hasAttribute('data-dropdown-panel-hidden', 'true')) {
        this.nextElementSibling.classList.toggle('openDropdownPanel');
        this.nextElementSibling.setAttribute('data-dropdown-panel-hidden', 'false');
    }
}

if (panelDropdown) {
    panelDropdown.forEach(li => {
        li.addEventListener('click', openPanelDropdown);
    })
}

// toggle panel button for open navbar
const openPanelNav = document.querySelector('#openPanelNav');
const panelSidebar = document.querySelector('.sidebar');

const openPanel = () => {
    openPanelNav.classList.toggle('openPanel');
    panelSidebar.classList.toggle('menuPanelIn');
}

if (openPanelNav) {
    openPanelNav.addEventListener('click', openPanel);
}


// show panel alerts and mask
const showPanelAlert = () => {
    document.body.style.overflow = 'hidden';
    panelAlertmask.classList.add('panelMaskin');
    panelAlert.classList.add('panelAlertin');
}

// remove panel alerts and mask
const removePanelAlert = () => {
    document.body.style.overflow = 'auto';
    panelAlertmask.classList.remove('panelMaskin');
    panelAlert.classList.remove('panelAlertin');
}

// element creator function for alerts
function elementCreator(elm, MyElmClass) {
    let MyElm = document.createElement(elm);
    MyElm.classList.add(MyElmClass);
    return MyElm;
}

// mini alert variable for alerts
let miniAlert;

// show mini alert function
function showMiniAlert() {
    miniAlert = elementCreator('div', 'Suc-alert');
    miniAlert.textContent = `پست قفل شد`;
    panelMainContainer.appendChild(miniAlert);
    let allAlerts = document.querySelectorAll('.Suc-alert');
    setTimeout(() => {
        allAlerts.forEach(alerts => {
            alerts.classList.add('Suc-alert-in');
        })
    }, 200)

    setTimeout(() => {
        allAlerts.forEach(alerts => {
            alerts.classList.add('Suc-alert-out');
        })
    }, 4000)
}

function showMiniAlertgreen() {
    showMiniAlert();
    miniAlert.classList.add('Suc-alert-green');
    miniAlert.textContent = `پست باز شد`;
}

function showMiniAlertDelete() {
    showMiniAlert();
    miniAlert.textContent = `پست حذف شد`;
}

function showMiniAlertUndoDelete() {
    showMiniAlert();
    miniAlert.classList.add('Suc-alert-green')
    miniAlert.textContent = `پست بازگردانی شد`
    undoDeletePost.classList.remove('undoDeletePost-in')
}

function showMiniAlertCommentDelete() {
    showMiniAlert();
    miniAlert.textContent = `کامنت حذف شد`;
}

function showMiniAlertUserLock() {
    showMiniAlert();
    miniAlert.textContent = `حساب قفل شد`
}

function showMiniAlertUserOpen() {
    showMiniAlert();
    miniAlert.classList.add('Suc-alert-green');
    miniAlert.textContent = `حساب باز شد`;
}

function showMiniAlertDeleteUser() {
    showMiniAlert();
    miniAlert.textContent = `حساب حذف شد`;
}

// reload progress animation
const sycsIcons = document.querySelectorAll('.sycs-icon');
const logOutPanel = document.querySelector('.logout__panel');
const reloadingAnimation = document.querySelector('.sendSucceseFullAnimation');
const panelMainContainer = document.querySelector('.panel__main__container');

// creating panel Alert
const panelAlertmask = document.createElement('div');
const panelAlert = document.createElement('div');
panelAlertmask.className = 'panelMask';
panelAlert.className = 'panelAlert';
panelMainContainer.appendChild(panelAlertmask);
panelMainContainer.appendChild(panelAlert);

// modal base scripts
function reloading() {
    this.parentNode.appendChild(reloadingAnimation);
    reloadingAnimation.classList.add('succses__Contact__in');

    function reloadedAlert() {
        panelAlert.style.background = "#23232b";
        panelAlert.innerHTML = `
        <h1>سرور پاسخگو نمی باشد</h1>
        <p>متاسفانه اطلاعات شما یافت نشد لطفا بعدا دوباره تلاش کنید.</p>
        <div>
        <button onclick="removePanelAlert()" class="close-modal">اوکی متوجه شدم</button>
        </div>`;
        showPanelAlert();
        reloadingAnimation.classList.remove('succses__Contact__in');
        this.parentNode.removeChild(reloadingAnimation);
    }
    setTimeout(reloadedAlert, 5000);
}

if (sycsIcons) {
    sycsIcons.forEach(i => {
        i.addEventListener('click', reloading)
    })
}

// modal base scripts

// logout panel modal 
const signOutPanel = () => {
    location.href = '/FlixMovie Panel/PanelLogin.html'
}

function logOutAgree() {
    showPanelAlert();
    panelAlert.style.background = "#CC3333";
    panelAlert.innerHTML = `
<h1>خروج از حساب کاربری <i style="vertical-align: middle"; class="fas fa-exclamation-triangle"></i></h1>
<p>آیا مطمعن هستید که میخواهید از حسابتان خارج شوید؟</p>
<div>
<button onclick="signOutPanel()" class="close-modal">بله خارج شو</button>
<button onclick="removePanelAlert()" class="close-modal">منصرف شدم</button>
</div>`;
}

if (logOutPanel) {
    logOutPanel.addEventListener('click', logOutAgree);
}

// logout panel modal 

// sort list section 
const sortListTitle = document.querySelector('.sort-list-title');
const sortListButton = document.querySelector('.sort-lists-button');
const sortListBars = document.querySelector('.sort-list-bar');
const sortListItems = document.querySelector('.sort__table__lists');
const sortListItemsli = document.querySelectorAll('.sort__table__lists li');

if (sortListButton) {
    sortListButton.addEventListener('click', openSortLists);
}

function openSortLists() {
    sortListItems.classList.toggle('active');
    sortListBars.classList.toggle('active');

    for (let i = 0; i < sortListItemsli.length; i++) {
        sortListItemsli[i].addEventListener('click', function () {
            sortListTitle.textContent = sortListItemsli[i].textContent;
        })
    }
}
// sort list section end

// post actions buttons
const postActionButtons = document.querySelectorAll('.admin__post__actions a');

function showPostActionAlert() {
    if (this.hasAttribute('data-lock-button')) {
        showPanelAlert();
        panelAlert.style.background = "#12ae40";
        panelAlert.innerHTML = `
        <h1>تغییر وضعیت </h1>
        <p>آیا مطمعن هستید که میخواهید این پست را قفل کنید؟</p>
        <div>
        <button class="showMiniAlert" onclick="showMiniAlert() , removePanelAlert()">اعمال تغییرات</button>
        <button onclick="removePanelAlert()" class="close-modal">منصرف شدم</button>
        </div>`;

        const showMiniAlert = document.querySelector('.showMiniAlert');
        showMiniAlert.addEventListener('click', () => {
            this.innerHTML = `<i class="material-icons">lock_open</i>`;
            this.setAttribute('data-lock-button-text', 'باز کردن پست');
        })

        if (this.innerHTML === `<i class="material-icons">lock_open</i>`) {
            panelAlert.innerHTML = `
            <h1>تغییر وضعیت </h1>
            <p>آیا مطمعن هستید که میخواهید این پست را باز کنید؟</p>
            <div>
            <button class="showMiniAlert" onclick="ChangeEncIcon() , showMiniAlertgreen(), removePanelAlert()" >اعمال تغییرات</button>
            <button onclick="removePanelAlert()" class="close-modal">منصرف شدم</button>
            </div>`;

            ChangeEncIcon = () => {
                this.innerHTML = `<i class="material-icons">enhanced_encryption</i>`;
                this.setAttribute('data-lock-button-text', 'قفل کردن پست');
            }
        }
    }

    if (this.hasAttribute('data-delete-button')) {
        showPanelAlert();
        panelAlert.style.background = "#CC3333";
        panelAlert.innerHTML = `
        <h1>حذف پست <i style="vertical-align: middle"; class="fas fa-exclamation-triangle"></i> </h1>
        <p>آیا مطمعن هستید که میخواهید این پست را حذف کنید؟</p>
        <div>
        <button onclick="showMiniAlertDelete() , undoDeletePostFunction() , removePanelAlert()" class="close-modal">اعمال تغییرات</button>
        <button onclick="removePanelAlert()" class="close-modal">منصرف شدم</button>
        </div>`;
    }

    if (this.hasAttribute('data-delete-comment')) {
        showPanelAlert();
        panelAlert.style.background = "#CC3333";
        panelAlert.innerHTML = `
        <h1>حذف کامنت <i style="vertical-align: middle"; class="fas fa-exclamation-triangle"></i> </h1>
        <p>آیا مطمعن هستید که میخواهید این کامنت  را حذف کنید؟</p>
        <div>
        <button onclick="showMiniAlertCommentDelete() ,  removePanelAlert()" class="close-modal">اعمال تغییرات</button>
        <button onclick="removePanelAlert()" class="close-modal">منصرف شدم</button>
        </div>`;
    }

    if (this.hasAttribute('data-lock-user')) {
        showPanelAlert();
        panelAlert.style.background = "#CC3333";
        panelAlert.innerHTML = `
        <h1>قفل حساب <i style="vertical-align: middle"; class="fas fa-exclamation-triangle"></i> </h1>
        <p>آیا مطمعن هستید که میخواهید این حساب را قفل کنید؟</p>
        <div>
        <button onclick="showMiniAlertUserLock() , removePanelAlert()" class="showMiniAlert">اعمال تغییرات</button>
        <button onclick="removePanelAlert()" class="close-modal">منصرف شدم</button>
        </div>`;

        const showMiniAlert = document.querySelector('.showMiniAlert');
        showMiniAlert.addEventListener('click', () => {
            this.innerHTML = `<i class="material-icons lock-user">lock_open</i>`;
            this.setAttribute('data-lock-button-text', 'باز کردن حساب');
        })
    }

    if (this.innerHTML === `<i class="material-icons lock-user">lock_open</i>`) {
        panelAlert.innerHTML = `
        <h1>باز کردن حساب</h1>
        <p>آیا مطمعن هستید که میخواهید این حساب را باز کنید؟</p>
        <div>
        <button class="showMiniAlert" onclick="ChangeEncIcon() , showMiniAlertUserOpen(), removePanelAlert()" >اعمال تغییرات</button>
        <button onclick="removePanelAlert()" class="close-modal">منصرف شدم</button>
        </div>`;


        ChangeEncIcon = () => {
            this.innerHTML = `<i class="material-icons">enhanced_encryption</i>`;
            this.setAttribute('data-lock-button-text', 'قفل کردن حساب');
        }
    }

    if (this.hasAttribute('data-delete-user')) {
        showPanelAlert();
        panelAlert.style.background = "#CC3333";
        panelAlert.innerHTML = `
        <h1>حذف حساب <i style="vertical-align: middle"; class="fas fa-exclamation-triangle"></i> </h1>
        <p>آیا مطمعن هستید که میخواهید این حساب را حذف کنید؟</p>
        <div>
        <button onclick="showMiniAlertDeleteUser() , removePanelAlert()" class="showMiniAlert">اعمال تغییرات</button>
        <button onclick="removePanelAlert()" class="close-modal">منصرف شدم</button>
        </div>`;
    }
}

let undoDeletePost;
const closeUndo = () => {
    let undoDeletePosts = document.querySelectorAll('.undoDeletePost');
    for (let i = 0; i < undoDeletePosts.length; i++) {
        undoDeletePosts[i].classList.remove('undoDeletePost-in');
    }
}

// ubdo deelete post function
function undoDeletePostFunction() {
    undoDeletePost = elementCreator('div', 'undoDeletePost');
    undoDeletePost.innerHTML += `<p onclick="showMiniAlertUndoDelete()">بازگردانی</p>
    <span class="material-icons" onclick="closeUndo()">close</span>`;
    panelMainContainer.appendChild(undoDeletePost);


    setTimeout(() => {
        undoDeletePost.classList.add('undoDeletePost-in');
        undoDeletePost.classList.add('progress-undo');
    }, 4000);

    setTimeout(() => {
        undoDeletePost.classList.remove('undoDeletePost-in');
    }, 8100);
}

if (postActionButtons) {
    postActionButtons.forEach(actions => {
        actions.addEventListener('click', showPostActionAlert);
    })
}


// post actions buttons end

// add click Event for black mask on panel alerts
if (panelAlertmask) {
    panelAlertmask.addEventListener('click', function () {
        removePanelAlert();
    });
}
// add click Event for black mask on panel alerts


// add new post scripts start here 

// custom select box scripts
const addNewPostSelectBox = document.querySelectorAll('.select-box-inp');
const selecBoxItems = document.querySelectorAll('.selectable-list li');

function openSelectBox(event) {
    event.target.classList.toggle('select-box-inp-on');
    event.target.nextElementSibling.classList.toggle('selectable-list-on');
}

if (addNewPostSelectBox) {
    addNewPostSelectBox.forEach(p => {
        p.addEventListener('click', openSelectBox);
    })
}

function selectBoxitems() {
    if (!this.hasAttribute('data-tags')) {
        this.parentNode.parentNode.firstElementChild.textContent = this.textContent;
        this.parentNode.classList.toggle('selectable-list-on');
        this.parentNode.previousElementSibling.classList.toggle('select-box-inp-on');
    }
}

if (selecBoxItems) {
    selecBoxItems.forEach(li => {
        li.addEventListener('click', selectBoxitems);
    })
}

// custom select box scripts

// add (addaTag) function to the all list on the add tag dropdown
const dataTags = document.querySelectorAll('[data-tags]');
if (dataTags) {
    dataTags.forEach(tag => {
        tag.addEventListener('click', addTag);
    })
}
// add (addaTag) function to the all list on the add tag dropdown

function addTag() {
    // data tag creator
    let datatagContainer = elementCreator('span', 'dataTag');
    datatagContainer.innerHTML += `
     <span data-clear-tag-tooltip="پاک کردن">
     ${this.textContent}
     </span> `
    this.parentNode.parentNode.firstElementChild.appendChild(datatagContainer);
    // data tag creator

    // if parent node children why up 4 number script stoped
    if (this.parentNode.parentNode.firstElementChild.children.length >= 4) {
        this.parentNode.parentNode.firstElementChild.lastElementChild.remove();
        this.parentNode.classList.toggle('selectable-list-on');
        showPanelAlert();
        panelAlert.style.background = "#CC3333";
        panelAlert.innerHTML = `
            <h1> محدودیت برچسب گذاری  <i class="fas fa-exclamation-triangle"></i></h1>
            <p>شما فقط قادر به اضافه کردن ۳ برچسب هستید.</p>
            <div>
            <button onclick="removePanelAlert()" class="close-modal">اوکی متوجه شدم</button>
            </div>`;
    }
    // if parent node children why up 4 number script stoped

    // get all tags when user clicked removed
    const Alltags = document.querySelectorAll('.dataTag');
    for (let i = 0; i < Alltags.length; i++) {
        Alltags[i].addEventListener('click', () => {
            Alltags[i].remove();
        })
    }
    // get all tags when user clicked removed
}

// add post actors name
const addPostActor = document.querySelector('#post-actors');

if (addPostActor) {
    addPostActor.addEventListener('keyup', (event) => {
        if (event.keyCode === 32) {
            addPostActor.value += ' ، ';
        }
    })
}
// add post actors name

// upload post thumbnail
const imgFormBg = document.querySelector('#post-uploaded-background');
const uploadImgForm = document.querySelector('#upload-post-thumbnail');
const PostComment__Animation = document.querySelector('.PostComment__Animation');
if (PostComment__Animation) {
    PostComment__Animation.style.display = 'none';
}

if (uploadImgForm) {
    uploadImgForm.addEventListener('change', function () {
        imgFormBg.classList.add('uploadImgOverlay');
        imgFormBg.firstElementChild.style.display = 'none';
        PostComment__Animation.style.display = 'block';


        const image = uploadImgForm.files[0];
        const bgurl = URL.createObjectURL(image);

        imgFormBg.appendChild(PostComment__Animation);
        PostComment__Animation.classList.add("PostComment__Animation__in");

        setTimeout(() => {
            imgFormBg.style.background = `rgba(0,0,0,.3) url(${bgurl})  no-repeat center center`;
            imgFormBg.style['background-size'] = 'cover';
        }, 2000)

        setTimeout(() => {
            PostComment__Animation.classList.remove("PostComment__Animation__in");
            setTimeout(() => {
                imgFormBg.removeChild(PostComment__Animation);
            }, 1000);
        }, 4000)
    })
}

// sereis file form for showing img 
const sereisCover = document.querySelector('#sereis-cover');
const sereisCoverbg = document.querySelector('.sereis-cover-bg');

if (sereisCover) {
    sereisCover.addEventListener('change', function () {
        const sereisimg = sereisCover.files[0];
        const bgurl = URL.createObjectURL(sereisimg);
        sereisCoverbg.firstElementChild.style.display = 'none';
        sereisCoverbg.style['background'] = `url(${bgurl}) no-repeat center center`;
        sereisCoverbg.style['background-size'] = 'cover';

    })
}
// sereis file form for showing img 

// video imdb score input
const placeholder = document.querySelector('.placeholder');
const postImdbScore = document.querySelector('#post-imdb-score');
const contenteditables = document.querySelector('[contenteditable]')

if (contenteditables) {
    contenteditables.addEventListener('keyup', (event) => {
        if (event.which === 13) {
            event.preventDefault();
        }
    })
}

if (postImdbScore) {
    postImdbScore.addEventListener('focus', () => {
        placeholder.classList.add('placeholder-out');
    })

    postImdbScore.addEventListener('keyup', (event) => {
        if (event.keyCode === 32) {
            postImdbScore.innerHTML += `
            <svg style="vertical-align:middle; fill:#ffbf00;" viewBox="0 0 24 24">
            <g>
                <g>
                    <path
                        d="M5,15.001c-0.276,0-0.5-0.224-0.5-0.5v-5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5    C5.5,14.777,5.276,15.001,5,15.001z" />
                </g>
                <g>
                    <path
                        d="M11,15.001c-0.276,0-0.5-0.224-0.5-0.5v-4.5h-0.09L9.49,14.599C9.443,14.832,9.238,15.001,9,15.001    s-0.443-0.168-0.49-0.402L7.59,10.001H7.5v4.5c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-5c0-0.276,0.224-0.5,0.5-0.5h1    c0.238,0,0.443,0.168,0.49,0.402L9,11.951l0.51-2.549C9.557,9.169,9.762,9.001,10,9.001h1c0.276,0,0.5,0.224,0.5,0.5v5    C11.5,14.777,11.276,15.001,11,15.001z" />
                </g>
                <g>
                    <path
                        d="M14,15.001h-1c-0.276,0-0.5-0.224-0.5-0.5v-5c0-0.276,0.224-0.5,0.5-0.5h1c0.827,0,1.5,0.673,1.5,1.5v3    C15.5,14.328,14.827,15.001,14,15.001z M13.5,14.001H14c0.276,0,0.5-0.224,0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-0.5V14.001z" />
                </g>
                <g>
                    <path
                        d="M17,15.001c-0.276,0-0.5-0.224-0.5-0.5v-5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5    C17.5,14.777,17.276,15.001,17,15.001z" />
                </g>
                <g>
                    <path
                        d="M18,15.001c-0.827,0-1.5-0.673-1.5-1.5v-2c0-0.827,0.673-1.5,1.5-1.5s1.5,0.673,1.5,1.5v2    C19.5,14.328,18.827,15.001,18,15.001z M18,11.001c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2    C18.5,11.225,18.276,11.001,18,11.001z" />
                </g>
                <g>
                    <path
                        d="M21,17.001H3c-1.378,0-2.5-1.122-2.5-2.5v-5c0-1.378,1.122-2.5,2.5-2.5h18c1.378,0,2.5,1.122,2.5,2.5v5    C23.5,15.879,22.378,17.001,21,17.001z M3,8.001c-0.827,0-1.5,0.673-1.5,1.5v5c0,0.827,0.673,1.5,1.5,1.5h18    c0.827,0,1.5-0.673,1.5-1.5v-5c0-0.827-0.673-1.5-1.5-1.5H3z" />
                </g>
            </g>
        </svg>
            `;
        }
    })

    postImdbScore.addEventListener('blur', () => {
        if (postImdbScore.innerHTML === "") {
            placeholder.classList.remove('placeholder-out');
        }
    })

    postImdbScore.addEventListener('keyup', () => {
        if (postImdbScore.innerHTML.length >= 8) {
            postImdbScore.setAttribute('contenteditable', 'false');
            showPanelAlert();
            panelAlert.style.background = "#CC3333";
            panelAlert.innerHTML = `
                <h1>  <i class="fas fa-exclamation-triangle"></i></h1>
                <p>حداکثر امتیاز در ۸ کلمه مجاز است.</p>
                <div>
                <button onclick="removePanelAlert()" class="close-modal">اوکی متوجه شدم</button>
                </div>`;
        }
    })
}
// video imdb score input

// upload video input and progress animation
const uploadedVidepInput = document.querySelector('#uploaded-video-input');
const uploadedVideoParent = document.querySelector('#upload-video-input-parent');

if (uploadedVidepInput) {
    uploadedVidepInput.addEventListener('change', () => {
        uploadedVideoParent.classList.toggle('uploading-video-progress');
        uploadedVideoParent.firstElementChild.classList.add('uploaded-loader-out');
        uploadedVideoParent.lastElementChild.classList.add('uploaded-loader-in');
        uploadedVideoParent.lastElementChild.previousElementSibling.innerHTML = 'در حال آپلود ویدیو...';

        setTimeout(() => {
            uploadedVideoParent.lastElementChild.previousElementSibling.innerHTML = 'آپلود ویدیو به اتمام رسید.';
            uploadedVideoParent.lastElementChild.classList.remove('uploaded-loader-in');
        }, 7000)
    })
}
// upload video input and progress animation

// get browser name
const uploadVideoIcons = document.querySelectorAll('.upload-post-icon')[1];
function decBrowser() {
    if ((navigator.userAgent.indexOf("Firefox") || navigator.userAgent.indexOf('OPR')) != -1) {
        if (uploadVideoIcons) {
            uploadVideoIcons.style.display = 'none';
        }
    }
}
decBrowser();
// get browser name

// post theme settings 
function addFormPageLoader() {
    document.body.appendChild(sendingAnimation);
    sendingAnimation.classList.add('sending-form-animation');
}

function removeFormPageLoader() {
    sendingAnimation.classList.remove('sending-form-animation');
    setTimeout(() => {
        document.body.removeChild(sendingAnimation);
    }, 1000)
}


const addNewPostForm = document.querySelector('.addnew__item');
const addPostBtn = document.querySelector('#add-new-post-submit');
const addNewPostInputs = document.querySelectorAll('.addnew__item input[type="text"]');
const addNewPostTextArea = document.querySelector('.addnew__item textarea');
const sendingAnimation = document.querySelector('.sending-animation');
const allAddPostForms = document.querySelectorAll('.addPostInputs');

const panelHeaderDropDown = document.querySelector('#panel-header-dropdown');
const panelHeaderDropDownPara = document.querySelector('#panel-header-dropdown p');
const panelHeaderLists = document.querySelectorAll('#panel-header-dropdown ul li');

function formsValidations(event) {
    event.preventDefault();
}
if (addNewPostForm) {
    addNewPostForm.addEventListener('submit', formsValidations);
}

if (addNewPostInputs) {
    addNewPostInputs.forEach(input => {
        if (sendingAnimation) {
            sendingAnimation.remove();
        }
        addPostBtn.addEventListener('click', () => {
            if (input.value === "") {
                input.style.border = "1px solid #cc3333";
            }

            if (input.value !== "") {
                input.style.border = "1px solid green";
                addFormPageLoader();

                setTimeout(() => {
                    location.reload();
                }, 3000);
            }
        })
    })
}


// add elemet when selected post theme
function addElm(attr, ...autoadd) {
    allAddPostForms[attr].style.display = 'block';
    for (attr = 0; attr < autoadd.length; attr++) {
        allAddPostForms[autoadd[attr]].style.display = 'block';
    }
}

// remove elemet when selected post theme
function removeElm(attr, ...autoremove) {
    if (allAddPostForms[attr]) {
        allAddPostForms[attr].style.display = 'none';
    }
    for (attr = 0; attr < autoremove.length; attr++) {
        allAddPostForms[autoremove[attr]].style.display = 'none';
    }
}

// resize element when input removed or added
function resizeElm(attr, num) {
    allAddPostForms[attr].style['flex-basis'] = num + '%';
    allAddPostForms[attr].style['max-width'] = num + '%';
}

// form animation for preloading elementes
removeElm(16);

// remove & add inputs when user selected post theme
if (panelHeaderDropDown) {
    panelHeaderDropDown.addEventListener('click', (event) => {
        panelHeaderDropDown.lastElementChild.classList.toggle('selectable-list-on');

        panelHeaderLists.forEach(li => {
            li.addEventListener('click', () => {
                panelHeaderDropDown.lastElementChild.classList.toggle('selectable-list-on');
            })
        })

        if (event.target.hasAttribute('data-post-theme-film')) {
            addFormPageLoader();
            setTimeout(() => {
                addElm(0, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18);
                removeElm(6, 9, 16)
                resizeElm(7, 100);
                resizeElm(8, 100);
            }, 1000)
            setTimeout(() => {
                removeFormPageLoader();
            }, 2000)
        }

        if (event.target.hasAttribute('data-post-theme-foreign')) {
            addFormPageLoader();
            setTimeout(() => {
                addElm(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18);
                removeElm(16);
                resizeElm(7, 49);
                resizeElm(8, 49);
            }, 1000)
            setTimeout(() => {
                removeFormPageLoader();
            }, 2000)
        }

        if (event.target.hasAttribute('data-post-theme-irani-sereis')) {
            addFormPageLoader();
            setTimeout(() => {
                addElm(0, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18);
                removeElm(6, 9);
                resizeElm(7, 100);
                resizeElm(8, 100);
            }, 1000)
            setTimeout(() => {
                removeFormPageLoader();
            }, 2000)
        }

        if (event.target.hasAttribute('data-post-theme-foreign-sereis')) {
            addFormPageLoader();
            setTimeout(() => {
                addElm(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18);
                resizeElm(7, 49);
                resizeElm(8, 49);
            }, 1000)
            setTimeout(() => {
                removeFormPageLoader();
            }, 2000)

        } if (event.target.hasAttribute('data-post-theme-coming-soon')) {
            addFormPageLoader();
            setTimeout(() => {
                removeElm(0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18);
                addElm(16);
            }, 1000)
            setTimeout(() => {
                removeFormPageLoader();
            }, 2000)
        }
    })
}
// post theme settings 

// post free on monetary checker
const monetaryPost = document.querySelector('#monetary-post');
const freePost = document.querySelector('#free-post');
const legalPostRadio = document.querySelector('#legal-post');
const monetaryPostPrice = document.querySelector('[data-money-price]');


function freeOrMonetaryChecker() {
    if (monetaryPost.checked) {
        monetaryPostPrice.classList.add('data-money-price-on');
    }
    if (freePost.checked) {
        monetaryPostPrice.classList.remove('data-money-price-on');
        legalPostRadio.checked = false;
        monetaryPostPrice.firstElementChild.firstElementChild.value = '';
    }
}

if (monetaryPost && freePost) {
    monetaryPost.addEventListener('change', freeOrMonetaryChecker);
    freePost.addEventListener('change', freeOrMonetaryChecker);
}

// post free on monetary checker

// catch post main badge input
const postBadgeSelector = document.querySelector('#post-badge-lists');

if (postBadgeSelector) {
    postBadgeSelector.addEventListener('keyup', (event) => {
        if (event.keyCode === 107) {
            postBadgeSelector.value = "";
            showPanelAlert();
            panelAlert.style.background = "#23232b";
            panelAlert.innerHTML = `
            <h1>یکی از برچسب های زیر را انتخاب کنید</h1>
            <br>
            <div>
            <ul class="row badges-selector">
                <li class="badge orange-badge">زیرنویس چسبیده</li>
                <li class="badge green-badge">دوبله شده</li>
                <li class="badge yellow-badge">انیمیشن</li>
                <li class="badge purple-badge">به زودی</li>
            </ul>
            <button onclick="removePanelAlert()" class="close-modal">منصرف شدم</button>
            </div>`;

            const badgesSelector = document.querySelector('.badges-selector');
            badgesSelector.addEventListener('click', (event) => {
                // catching event.target all styles and use on value color
                let styles = window.getComputedStyle(event.target);
                postBadgeSelector.value = event.target.textContent;
                postBadgeSelector.style.color = styles.color;
                event.target.onclick = removePanelAlert();
            })
        }
    })
}
// catch post main badge input

// upload avatar
const uploadAvatar = document.querySelector('#upload-avatar')
const uploadAvatarText = document.querySelector('.upload-avatar-text')

if (uploadAvatar) {
    uploadAvatar.addEventListener('change', () => {
        uploadAvatarText.textContent = 'تصویر بارگزاری شد'
    })
}
// upload avatar

// End
