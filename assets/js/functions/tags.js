import * as va from "../variables/variable.js"
import * as u from "./users.js"

let idSkill = 0;
export function createTag(value,padre=true){
    idSkill++;
    let dad=document.getElementById("tagsFather");
    let tag=document.createElement("div");
    let close=document.createElement("i");
    close.classList="fas fa-times-circle";
    tag.classList="tag"
    tag.id = idSkill;
    tag.innerHTML= value;
    tag.appendChild(close)
    if (padre==true){
        dad.appendChild(tag);
    }
    else{
        return tag
    }
    close.addEventListener("click",closesTag)
}


export function getFinalSkills(value){

    va.finalSkills.push(value);
    return va.finalSkills;
}

export function closesTag(e){
    const user = getUserInfo();
    let dead=document.getElementById(e.srcElement.parentNode.id);
    let actualStacks = user[0].stacks;
    let deadStackIndex = actualStacks.indexOf(e.srcElement.parentNode.innerText);
    actualStacks.splice(deadStackIndex, 1)
    let obj = userStacks(actualStacks);
    localStorage.clear();
    let userBook = loadUser();
    userBook.push(obj);
    localStorage.setItem('userBook', JSON.stringify(userBook))
    dead.remove();
}


export function addUserStack(value) {
    let finalStack = getFinalSkills(value);
    let obj = userStacks(finalStack);
    localStorage.clear();
    let userBook = loadUser();
    userBook.push(obj);
    localStorage.setItem('userBook', JSON.stringify(userBook))
}

export function userStacks(value) {
    const user = getUserInfo();
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
        stacks: value
    }
}

export function getUserInfo() {
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    return allUsers;
}

export function loadUser() {
    if (localStorage.getItem('userBook') == null) {
        return []
    }
    return JSON.parse(localStorage.getItem('userBook'))
}