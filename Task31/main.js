import { data } from "./data.js";
let tbody = document.querySelector("tbody");
let td = document.querySelectorAll("tbody tr td");
let th = document.querySelector(" thead tr th ");
let searchelem = document.querySelector("#search");
let az = document.querySelector(".az ")
let za = document.querySelector(".za")

function setup(param) {
    param.forEach((item, index) => {
        if (index % 2 === 0) {
            tbody.innerHTML += ` <tr>
        <td>${item.name}</td>
        <td>${item.ticker}</td>
        <td>${item.value}</td>
        ${item.change[0] === "-" ? td.innerHTML = `<td class="red ">${item.change}</td>` : td.innerHTML = `<td class="green">${item.change}</td>`}
    </tr>`
        }else {
            tbody.innerHTML += ` <tr>
        <td class="grey">${item.name}</td>
        <td class="grey">${item.ticker}</td>
        <td class="grey">${item.value}</td>
        ${item.change[0] === "-" ? td.innerHTML = `<td class="red grey">${item.change}</td>` : td.innerHTML = `<td class="green grey">${item.change}</td>`}
    </tr>`
        }
    })

}
setup(data)

searchelem.addEventListener("keyup", () => {
    let searchName = data.filter(item => item.name.includes(searchelem.value ))
    let searchTicker = data.filter(item => item.ticker.includes(searchelem.value))
    tbody.innerHTML = " ";
    setup(searchName,setup(searchTicker))
})


let isSorted = false;
th.addEventListener("click", () => {
    let sortedData;
    az.classList.remove("active")
    za.classList.remove("active")
    if (!isSorted) {
        az.classList.toggle("active")
        sortedData = data.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        });
    } else {
        za.classList.toggle("active")
        sortedData = data.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
            } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    isSorted = !isSorted;
    tbody.innerHTML = "";
    setup(sortedData);
});




