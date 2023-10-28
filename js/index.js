const defaultPaints = await fetch('js/db.json').then(res => res.json())

const paints = document.querySelector(".paints")

defaultPaints.forEach(paint => {
    paints.innerHTML +=
        `
    <div class="paint" data-id="${paint.id}">
   
    <div class="paint__left">
    <a href="templates/paint.html">
        <img src="${paint.imagePath}" alt="image Shagal"/>
        </a> 
    </div>
    <div class="paint__right">
    <a href="templates/paint.html">
        <h2> ${paint.title} </h2>
        </a> 
        <a href="templates/paint.html">
        <p class=""paint__right-description> ${paint.shortDescription} </p>
        </a> 
    </div>
   
</div>
    `
})

const paint = document.querySelectorAll(".paint")

paint.forEach(item => {
    item.addEventListener("click", () => {
        localStorage.setItem("id", item.dataset.id)
    })
})
