const header = document.querySelector("header")
const footer = document.querySelector("footer")

header.innerHTML = ` 
    ${window.location.pathname.includes('templates') 
    ? '<a href="../index.html"><h1>Картинная галерея</h1></a>' 
    : '<h1>Картинная галерея</h1>'}
    <p>Посвященная творчеству Марка Шагала</p>
` 

footer.innerHTML= `
    <div>
        <span>© Все права защищены.</span>
        <a href="https://github.com/artemelyashevich">
            <p>Разработал Эльяшевич Артём</p>
        </a>
    </div>
    ${!window.location.pathname.includes('templates') ? '<div><a href="#top">Наверх</a></div>' : ''}
`