const div = document.querySelector("div");
async function getdata(){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data)=>data.json())
    .then((d)=>{
        return d
    })
    .catch((err)=>{
        console.log(err)
    })
    data.map((r)=>{
        div.innerHTML += `<p>${r.title} </p>`
    })
}
getdata()