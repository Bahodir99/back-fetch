let elForm = document.querySelector('.form')
let elInp = document.querySelector('.inp')
let elList = document.querySelector('.list')
let elBtnGroup = document.querySelector('.btn__group')



const fetData = fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=> res.json())
.then((data)=> FullData(data));



const findData = []

function FullData(data){
    data.map((e)=>{
        let newLi = document.createElement('li')
        newLi.innerHTML = `<div class="card">
        <b>userId:${e.userId}</b>
        <b>Id:${e.id}</b>
        <b>title:${e.title}</b>
        <b>text:${e.body}</b>
        </div>`
        elList.appendChild(newLi);
        findData.push(e)
    })
}



elForm.addEventListener('submit', (item)=>{
    let elVal = elInp.value
    elList.innerHTML = ''
    findData.forEach((e)=>{
        if(e.userId == elInp.value){
            let newLi = document.createElement('li')
                newLi.innerHTML = `<div class="card">
                <b>userId:${e.userId}</b>
                <b>Id:${e.id}</b>
                <b>title:${e.title}</b>
                <b>text:${e.body}</b>
                </div>`
                elList.appendChild(newLi);               
            }
        })
    
})

