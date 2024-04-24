const fullimageelem=document.querySelector(".fullimage")
const otherimages=document.querySelectorAll(".otherimage img")
const minusbtn=document.getElementById("minus")
const plusbtn=document.getElementById("plus")
const numshowelem=document.querySelector(".numshow")
let count=0

otherimages.forEach(image=>{
 image.addEventListener("click",()=>{
    otherimages.forEach(img=>{
        img.classList.remove("active")
    })
    image.classList.add("active")
    console.log(image.src)
    slider(image.src)

 })
})

function slider(src) {
    fullimageelem.innerHTML=`  <img src="${src}" alt="">`
}

numshowelem.innerHTML=count

minusbtn.addEventListener("click",()=>{
    count--
    if (count<0) {
        count=0
    }
    numshowelem.innerHTML=count
  
})

plusbtn.addEventListener("click",()=>{
    count++
    numshowelem.innerHTML=count
})
