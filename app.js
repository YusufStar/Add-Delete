const langInput = document.querySelector('.lang-input')
const addBtn = document.querySelector('#add-btn')
const deleteBtn = document.querySelector('#delete-btn')
const langList = document.getElementById('lang-list')

const newUl = document.createElement("ul");
langList.appendChild(newUl);

addBtn.addEventListener("click", () => {
    if(!langInput.value) {
        alert("Please enter a language");
    } else if(langInput.value.toLowerCase() == "javascript"){
        newUl.innerHTML += `<li class="text-danger">${langInput.value}</li>`;
        langInput.value = "";
    } else {
        newUl.innerHTML += `<li>${langInput.value}</li>`;
        langInput.value = "";
    }
    langInput.focus();
});

deleteBtn.addEventListener("click", () => {
    newUl.childElementCount > 0 ? newUl.removeChild(newUl.lastElementChild) : alert("There is no item to delete")
})

langInput.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) {
        addBtn.click();
    }

    if(e.keyCode === 46) {
        deleteBtn.click()
    }
})

window.addEventListener("load", () => {
    langInput.focus();
});