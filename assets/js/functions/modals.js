import * as dom from "../variables/indexDom.js";
import * as gDom from "../variables/generalDom.js";
import * as tag from "./tags.js";


/* open modals */

gDom.userBackground.onclick = function (e){
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    gDom.generalContentModal.innerHTML = (modalModifyUserBackground(allUsers[0]))
    gDom.generalModal.style.display = "block";
    const btnChangeBackground = document.getElementById("changeModalSubmit")
    btnChangeBackground.addEventListener("click", modifyUserBackground)
    
}

gDom.dicebearAvatarMini.onclick = function () {
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    gDom.generalContentModal.innerHTML = (modalAvatarVersions(allUsers[0]))
    gDom.generalModal.style.display = "block";
    const avatarClicked = document.getElementsByClassName("avatar-variants")
    for (const iterator of avatarClicked) {
        iterator.addEventListener("click", changeAvatar)
    }
}

gDom.btnEditUser.onclick = function () {
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    gDom.generalContentModal.innerHTML = (modalMainInfo(allUsers[0]))
    gDom.generalModal.style.display = "block";
    const btnInfoUser = document.getElementById("mainFormSubmit")
    btnInfoUser.addEventListener("click", rescribirvariables)
}

gDom.btnEditExperience.onclick = function () {
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    gDom.generalContentModal.innerHTML = (modalExperience(allUsers[0]))
    gDom.generalModal.style.display = "block";
    const btnInfoUser = document.getElementById("mainFormSubmit")
    btnInfoUser.addEventListener("click", rescribirvariables)
}


// When the user clicks on <span> (x), close the modal
gDom.closeModal.onclick = function () {
    vaciarModal(gDom.generalContentModal)
    gDom.generalModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == gDom.generalModal) {
        gDom.generalModal.style.display = "none";
    }
}

function vaciarModal(modal) {
    modal.innerHTML = ""
}

function modalModifyUserBackground(e) {
    return (`
<form id ="main-modal" class="modalForm">
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="img">New Background-Img URL:</label>
            <input name="background" type="img" class="form-control" id="userBackgroundInput" placeholder="img" value="${e.background}">
        </div>
    </div>
    <button id="changeModalSubmit" type="button" class="btn-sign-in">Change</button>
</form>`)
}

function modalAvatarVersions(obj) {
    return (`
    <form id ="main-modal" class="modalForm">
        <div class ="avatar-variant-container">
            <div class="form-row avatar-variant-div">
                <img class="avatar-variants" src="https://avatars.dicebear.com/api/avataaars/${obj.username}.svg?background=white" alt="">
            </div>
            <div class="form-row avatar-variant-div">
                <img class="avatar-variants" src="https://avatars.dicebear.com/api/big-ears/${obj.username}.svg?background=white" alt="">
            </div>
            <div class="form-row avatar-variant-div">
                <img class="avatar-variants" src="https://avatars.dicebear.com/api/miniavs/${obj.username}.svg?background=white" alt="">
            </div>
            <div class="form-row avatar-variant-div">
                <img class="avatar-variants" src="https://avatars.dicebear.com/api/open-peeps/${obj.username}.svg?background=white" alt="">
        </div>
    </form>`)
}


function modalMainInfo(obj) {
    return (`
<form id ="main-modal" class="modalForm">
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input name="email" type="email" class="form-control" id="inputEmail4" placeholder="Email" value="${obj.email}">
        </div>
        <div class="form-group col-md-6">
            <label for="inputUser4">Username</label>
            <input name="username" type="text" class="form-control" id="inputUser4" placeholder="Username" value="${obj.username}">
        </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input name="city" type="text" class="form-control" id="inputCity" value="${obj.city}">
        </div>
        <div class="form-group col-md-4 autocomplete">
            <label for="inputState">Pais</label>
            <input name="country" class="form-control country-main-form" id="inputCountry" type="text" name="myCountry" placeholder="Country" value="${obj.country}">
        </div>
        <div class="form-group">
            <label for="inputAddress">Descripcion</label>
            <textarea name="description" type="text" class="form-control description-input-main-form" id="inputDescription" placeholder="Cuentanos algo sobre ti" >${obj.description}</textarea>
        </div>
    </div>
    <button id="mainFormSubmit" type="button" class="btn-sign-in">Sign in</button>
</form>`)
}

function modalExperience(obj) {
    let arr = []
    console.log(obj.stack);
    for (const stack of obj.stacks) {
        console.log(tag.createTag(stack, false))
        arr.push(tag.createTag(stack, false))
    }
    console.log(arr)

    return (`
    <form id ="main-modal" class="modalForm">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail4">Sector</label>
                <select class='form-control' name="sector" id="">
                    <option value="${obj.sector}">${obj.sector}</option>
                    <option value="Front">Front</option>
                    <option value="Back">Back</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Data">Data</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label for="inputUser4">Year of experience</label>
                <select class='form-control' name="years" id="">
                    <option value="${obj.years}">${obj.years}</option>
                    <option value = "Junior (0 < 2 Y)" > Junior(0 &lt; 2 Y) </option> 
                    <option value = "semi-Senior (2 < 6 Y)" > semi Senior(2 &lt; 6 Y) </option> 
                    <option value = "Senior (6 > Y)" > Senior(6 &gt; Y) </option>
                </select>
            </div>
            </div>
        <button id="mainFormSubmit" type="button" class="btn-sign-in">Sign in</button>
    </form>
`)
}

function rescribirvariables() {
    const inputsUserInfo = document.getElementsByClassName("form-control")
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    for (const userInfo of inputsUserInfo) {
        allUsers[0][userInfo.name] = (userInfo.value)
    }
    console.log(allUsers);
    localStorage.setItem('userBook', JSON.stringify([allUsers[0]]))
    gDom.generalModal.style.display = "none";
    vaciarModal(gDom.generalContentModal)
    window.location.reload()
}

function changeAvatar(e) {
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    allUsers[0].avatar = e.srcElement.src;
    localStorage.setItem('userBook', JSON.stringify([allUsers[0]]))
    gDom.generalModal.style.display = "none";
    vaciarModal(gDom.generalContentModal)
    window.location.reload()
}

function modifyUserBackground(e) {
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    const userBackgroundInput = document.getElementById("userBackgroundInput")
    allUsers[0].background = userBackgroundInput.value;
    localStorage.setItem('userBook', JSON.stringify([allUsers[0]]))
    gDom.generalModal.style.display = "none";
    vaciarModal(gDom.generalContentModal)
    window.location.reload()
}