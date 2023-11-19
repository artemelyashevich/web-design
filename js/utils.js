const forwardArrow = document.querySelector(".forward")

const backArrow = document.querySelector(".back")


const findPainting = (id) => {
    let painting = defaultPaints.find(item => item.id === parseInt(id))
    localStorage.setItem("id", id)
    return painting
}

const showPainting = (painting) => {
    document.querySelector(".painting").innerHTML =
        `
    <div class="painting__left">
        <img src=".${painting.imagePath}" alt="image Shagal"/>
    </div>
    <div class="painting__right">
        <h2>${painting.title}</h2>
        <p>${painting.description}</p>
    </div>
`
}

const showArrows = (id) => {
    if (id > 1) {
        backArrow.innerHTML = `
        <img src="../assets/reshot-icon-arrow-left-4NA6KJF8CU - Copy.svg" alt="" srcset="">
        `
    } else {
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
