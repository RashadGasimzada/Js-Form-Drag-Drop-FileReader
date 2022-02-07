// let form = document.getElementById("form");
// let inputPass = document.querySelector(".password");
// let inputEmail = document.querySelector(".email");
// let errorMessage = document.getElementById("error-message");

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     if(inputEmai.value.trim() == "") {
//         errorMessage.classList.remove("d-none");
//     }
//     else {
//         errorMessage.classList.add("d-none");
//     }
// })

// inputEmail.addEventListener("keyup",function(e) {
//     if(inputEmail.value.trim() == "") {
//         errorMessage.classList.remove("d-none");
//         this.parentNode.lastElementChild.classList.add("disabled");
//     }
//     else {
//         errorMessage.classList.add("d-none");
//         this.parentNode.lastElementChild.classList.remove("disabled");
//     }
// })

// inputEmail.addEventListener("change", function(e) {

// })

// let cities = document.getElementById("cities");

// cities.addEventListener("change", function() {

// })

// let dragElems = document.querySelectorAll(".item");
// let dropArea = document.getElementById("drop-area");


// dragElems.forEach(elem => {
//     elem.ondragstart = (e) => {
//         e.dataTransfer.setData("id",e.target.id);
//     }
// })

// dragElem.ondragend = (e) => {
//     console.log("drag end");
// }
// dragElem.ondrag = (e) => {
//     console.log("on drag");
// }

// dropArea.ondragover = (e) => {
//     e.preventDefault();
// }

// dropArea.ondrop = (e) => {
//     let id = e.dataTransfer.getData("id");
//     e.target.append(document.getElementById(id));
// }

let upload = document.querySelector(".fas");
let table = document.getElementById("table");
let dropPlace = document.querySelector(".upload-area")

upload.addEventListener("click", function() {
    this.nextElementSibling.click();
})

upload.nextElementSibling.onchange = function(e) {
    
    for (const file of e.target.files) {
        let reader = new FileReader();
        reader.onloadend = function(ev) {
            table.lastElementChild.innerHTML += `<tr>
            <th scope="row"><img src="${ev.target.result}" style="height:100px"></th>
            <td>${file.name}</td>
            <td>${file.type}</td>
            <td>${file.size/1024} kb</td>
        </tr>`
        }
        reader.readAsDataURL(file)
    }
    
}

dropPlace.ondragover = (e) => {
    e.preventDefault();
}

dropPlace.ondrop = (e) => {
    e.preventDefault();
    for (const file of e.dataTransfer.files) {
        let reader = new FileReader();
        reader.onloadend = function(ev) {
            table.lastElementChild.innerHTML += `<tr>
            <th scope="row"><img src="${ev.target.result}" style="height:100px"></th>
            <td>${file.name}</td>
            <td>${file.type}</td>
            <td>${file.size/1024} kb</td>
        </tr>`
        }
        reader.readAsDataURL(file)
    }
}