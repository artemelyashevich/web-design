const defaultPaints = await fetch('../js/db.json').then(res => res.json())

const id = localStorage.getItem('id')

const painting = defaultPaints.find(item => item.id === parseInt(id))

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

