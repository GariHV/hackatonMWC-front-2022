import * as dom from "../variables/indexDom.js";
import * as gDom from "../variables/generalDom.js";
import * as pDom from "../variables/professionalDom.js";
import * as skills from "./tags.js"

if (gDom.generalUsernameInput) {
    const user = getUserInfo();
    let arr = [user[0].stacks]
    const skill=await getSkills(arr[0])
    gDom.userBackground.src = user[0].background,
    gDom.generalUsernameInput.value = user[0].username;
    gDom.generalDescriptionInput.innerHTML = user[0].description;
    gDom.generalMailInput.value = user[0].email;
    gDom.generalAddressInput.value = user[0].city+","+user[0].country;
    gDom.dicebearAvatarMini.src = user[0].avatar;
    gDom.generalYearsInput.value = user[0].years;
    gDom.generalSectorInput.value = user[0].sector;
    for (const sk of skill) {
        gDom.stacks.insertAdjacentHTML("beforeend", sk)
    }

}

if (dom.btnNext) {
    dom.btnNext.addEventListener("click", () =>{
        addUserBio();
        window.location.href ="./assets/views/professional.html";
    });
}

if (dom.btnSubmit) {
    dom.btnSubmit.addEventListener("click", addUserProfessional);
}

function userBio(){
    return {
        background: "https://raw.githubusercontent.com/nuwe-io/files_storage/main/nuwe_bgr.png",
        email: dom.indexMailInput.value,
        avatar: "https://avatars.dicebear.com/api/pixel-art/" + dom.indexUsernameInput.value + ".svg?background=white",
        username: dom.indexUsernameInput.value,
        city: dom.indexCityInput.value,
        country: dom.indexCountryInput.value,
        description: dom.indexDescriptionInput.value,
        sector: "",
        years: "",
        stacks:[]
    }
}

function userStacks() {
    return {
        background: user[0].background,
        email: user[0].email,
        avatar: user[0].avatar,
        username: user[0].username,
        city: user[0].city,
        country: user[0].country,
        description: user[0].description,
        sector: "",
        years: "",
        stacks: []
    }
}

function userProfessional(){
    const user = getUserInfo();
    return {
        background: user[0].background,
        email: user[0].email,
        avatar: user[0].avatar,
        username: user[0].username,
        city: user[0].city,
        country: user[0].country,
        description: user[0].description,
        sector: user[0].sector=pDom.sectorProfessionalInput.value,
        years: user[0].years=pDom.yearsOfExperience.value,
        stacks: user[0].stacks
    }
}

function loadUser() {
    if (localStorage.getItem('userBook') == null) {
        return []
    }
    return JSON.parse(localStorage.getItem('userBook'))
}

function addUserBio() {
    localStorage.clear();
    let obj = userBio();
    let userBook = loadUser();
    userBook.push(obj);
    localStorage.setItem('userBook', JSON.stringify(userBook))
}

function addUserProfessional() {
    let obj = userProfessional();
    localStorage.clear();
    let userBook = loadUser();
    userBook.push(obj);
    localStorage.setItem('userBook', JSON.stringify(userBook))
    window.location.href = "./general.html";
}

export function getUserInfo(){
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    return allUsers;
}

async function getSkills(arr){
    const allSkills=[]
    for (const skill of arr) {
        const skills= await fetchLogo(skill)
        if(skills.includes(skills[0])){
            allSkills.push(createSkills(skills[0]))
        }
    }
    return allSkills;
}

async function fetchLogo(skill){
    let request =await fetch("../../recurses/logo.json")
    let data =await request.json()
    let obj =data.filter(x=> x.name ==skill)
    return obj
}
function createSkills({files,url,name}){
    return   `
    <figure>
        <img src="https://cdn.svgporn.com/logos/${files[0]}" >
        <figcaption><a href="${url}"> ${name} </a></figcaption>
    </figure>
    `
}



