//!Task-01

//*HTML-kod verilmişdir. Siyahının ilk elementini konsola çıxarın.

// let a=document.querySelector("li")
// console.log(a);


//!Task-02

//* HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
//* - Başlığı silin;
//* - Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin .


// document.querySelector("h1").remove()
// document.querySelector("ul").append("TITAN RTX")
// document.querySelector("ul").innerHTML +="<li>TITAN RTX</li>"


//!Task-03

//*HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
//*- başlıq mətnini «GeForce 20 Series» -a;
//*- fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.

// let a=document.querySelector("h1")
// a.innerHTML ="GeForce 20 Series"
// document.querySelectorAll("li").forEach(item=>{
//     if (item.className==="primary") {
//         return item.style.backgroundColor="#ebebeb"
//     }
// })

//!Task-04

//*HTML-kodu verilib. Siyahının primary klasına sahib olan bütün elementlərini konsola çıxarın.

// document.querySelectorAll("li").forEach(item=>{
//     if (item.className ==="primary") {
//         console.log(item.innerText);
//     }
// })

//!Task-05

//* HTML-kod verilmişdir. Yalnız JS kodundan istifadə edərək sinifləri dəyişdirin:
//* - bütün siyahı elementlərinə item sinifi əlavə edin;
//* - siyahıda primary sinfi olmayan elementlərə secondary sinfi əlavə edin.

// document.querySelectorAll("li").forEach(a=>{
//     return a.className="item"
// })
// console.log(document.querySelectorAll("li"));

// document.querySelectorAll("li").forEach(item=>{
//     if (item.className !== "primary") {
//         return item.className="secondary"
//     }
// })

// console.log(document.querySelectorAll("li"));

