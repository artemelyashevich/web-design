let id = localStorage.getItem('id')

let painting = defaultPaints.find(item => item.id === parseInt(id))

showArrows(id)

backArrow.addEventListener("click", () => {
    id--
    let currId = +id
    localStorage.setItem("id", +currId)
    showPainting(findPainting(currId))
    showArrows(id)
})

forwardArrow.addEventListener("click", () => {
    id++
    let currId = +id
    localStorage.setItem("id", +currId)
    showPainting(findPainting(currId))
    showArrows(id)
})

document.title = painting.title

showPainting(painting)