const init = () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let input = e.target.children[1].value
        
        fetch(`http://localhost:3000/movies/${input}`).then(res =>res.json())
        .then(data =>{
            let title = document.querySelector('section#movieDetails h4')
            let summary = document.querySelector('section#movieDetails p')
            // change the inner text of the above elements
            title.innerText = data.title
            summary.innerText =data.summary
        })
        //input.reset()
    })
}  

document.addEventListener('DOMContentLoaded', init);
