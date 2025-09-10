// Problem - 01

const url = 'https://potterapi-fedeperin.vercel.app/en/spells' 

let response = fetch(url)

response.then((v)=>{
    return v.json()
}).then((contests)=> {
    console.log(contests)
    ihtml = ''
    for(item in contests){
        console.log(contests[item])
         ihtml += `<div class="row">
            <div class="card m-3" style="width: 18rem;">
                <img src="./ChatGPT Image Aug 29, 2025, 09_53_50 PM.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contests[item].spell}</h5>
                    <p class="card-text">${contests[item].use}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>`
        cardContainer.innerHTML = ihtml
    }
})

// Problem - 02
let getNote = localStorage.getItem('notes')
alert('Your note is '+   getNote)

let note = prompt('Enter Your Notes')
if(note){
    localStorage.setItem('notes', note)
}

let deleteNote = confirm('do you want to delete')

if(deleteNote){
    localStorage.removeItem('notes')
    alert('Notes delete seccessfully')
}