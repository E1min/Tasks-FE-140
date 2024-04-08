let inputelem = document.querySelector("input")
let btn = document.querySelector("form button")
let ulelem = document.querySelector("ul")
let clearbtn = document.querySelector("form button:last-child")
let h6elem = document.querySelector("h6")
let modebtn= document.querySelector(".mode button")

modebtn.textContent="Dark Mode"
let modevalue=false

modebtn.addEventListener("click",()=>{
    document.body.classList.toggle("darkmode")
    if (modevalue) {
        modebtn.textContent="Dark Mode"
        modevalue=false
    }
    else{
        modebtn.textContent="Light Mode"
        modevalue=true
    }
})

btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputelem.value.trim() === "") {
        h6elem.textContent = "Don't write an empty list"
    }
    else {
        h6elem.textContent = ""
        let lielem = document.createElement("li")
        lielem.textContent = inputelem.value
        ulelem.appendChild(lielem)
        let deletebtn = document.createElement("button")
        deletebtn.textContent = "X";
        deletebtn.style.backgroundColor="transparent"
        deletebtn.style.border="none"
        deletebtn.style.fontSize="20px"
        lielem.appendChild(deletebtn)
        deletebtn.addEventListener("click", () => {
            lielem.remove();
        })
        clearbtn.addEventListener("click", (e) => {
            e.preventDefault()
            lielem.remove();
        })

        inputelem.value = ""

    }
})
