const id = localStorage.getItem('id')

let painting = defaultPaints.find(item => item.id === parseInt(id))

const forwardArrow = document.querySelector(".forward")

const backArrow = document.querySelector(".back")

if (id > 1) {
    backArrow.innerHTML = `
    <img src="../assets/reshot-icon-arrow-left-4NA6KJF8CU.svg" alt="" srcset="">
    `
}
if (id != defaultPaints.length) {
    forwardArrow.innerHTML = `
        <img src="../assets/reshot-icon-arrow-right-ZP2WDL9B8N.svg" alt="" srcset="">
    `
}

backArrow.addEventListener("click", () => {
    localStorage.setItem("id", +id - 1)
    location.reload()
})

forwardArrow.addEventListener("click", () => {
    localStorage.setItem("id", +id + 1)
    location.reload()
})

document.title = painting.title

document.querySelector(".paint").innerHTML = 
`
    <div class="paint__left">
        <img src=".${painting.imagePath}" alt="image Shagal"/>
    </div>
    <div class="paint__right">
        <h2>${painting.title}</h2>
        <p>${painting.description}</p>
    </div>
`