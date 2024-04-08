let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let btn = document.querySelector(".inputs button");
let displayelem = document.querySelector(".display");
let inputselem=document.querySelectorAll("label input");

displayelem.innerHTML = `
<div class="show"><h1>- -</h1><p>years</p></div>
<div class="show"><h1>- -</h1><p>month</p></div>
<div class="show"><h1>- -</h1><p>days</p></div>
`

btn.addEventListener("click", () => {
    inputselem.forEach(item=>{
        if (item.value==="") {
            item.className="error"
        }else{
            item.className=""
            let nowyear = new Date().getFullYear() - year.value;
    let nowmonth = (new Date().getMonth() + 1) - month.value;
    let nowday = new Date().getDate() - day.value
    if (nowmonth < 0 && nowday < 0) {
        nowmonth = month.value - (new Date().getMonth() + 1)
        nowday = 30 - (day.value - new Date().getDate())
        displayelem.innerHTML = `
    <div class="show"><h1>${nowyear - 1}</h1>  <p>year</p></div>
    <div class="show"><h1>${nowmonth}</h1> <p>month</p></div>
    <div class="show"><h1>${nowday}</h1> <p>days</p></div>
    `
    }
    else if (nowmonth < 0) {
        nowyear = nowyear - 1;
        nowmonth = month.value - (new Date().getMonth() + 1)
        nowday = 30 - day.value
        displayelem.innerHTML = `
        <div class="show"><h1>${nowyear}</h1>  <p>years</p></div>
        <div class="show"><h1>${nowmonth}</h1> <p>month</p></div>
        <div class="show"><h1>${nowday}</h1> <p>days</p></div>
        `

    } else if (nowday < 0) {
        nowday = 30 - (day.value - new Date().getDate())
        displayelem.innerHTML = `
        <div class="show"><h1>${nowyear}</h1>  <p>years</p></div>
        <div class="show"><h1>${nowmonth - 1}</h1> <p>month</p></div>
        <div class="show"> <h1>${nowday}</h1> <p>days</p></div>
        `
    }
    else {
        displayelem.innerHTML = `
        <div class="show"><h1>${nowyear}</h1>  <p>years</p></div>
        <div class="show"><h1>${nowmonth}</h1> <p>month</p></div>
        <div class="show"><h1>${nowday}</h1> <p>days</p></div>
    `
    }
        }
    })
    
})