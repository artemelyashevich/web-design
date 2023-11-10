const forwardArrow = document.querySelector(".forward")

const backArrow = document.querySelector(".back")


const findPainting = (id) => {
    let painting = defaultPaints.find(item => item.id === parseInt(id))
    localStorage.setItem("id", id)
    return painting
}

const showPainting = (painting) => {
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
}

const showArrows = (id) => {
    if (id > 1) {
        console.log("+");
        backArrow.innerHTML = `
        <img src="../assets/reshot-icon-arrow-left-4NA6KJF8CU.svg" alt="" srcset="">
        `
    } else {
        console.log("-");
        backArrow.innerHTML = ``
    }
    if (id != defaultPaints.length) {
        forwardArrow.innerHTML = `
            <img src="../assets/reshot-icon-arrow-right-ZP2WDL9B8N.svg" alt="" srcset="">
        `
    } else {
        forwardArrow.innerHTML = ``
    }
}