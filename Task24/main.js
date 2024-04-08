//!Task-01

//* İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
//* Bu rəqəmi üçrəqəmli olana kimi 7 vahid artırın.
//* Son dəyəri konsola çıxarın.

// let i=Number(prompt(`Iki reqemli eded daxil edin:`))
// i>10
// if(i<10){
// console.log(`iki reqemli eded daxil edin!`);
// }else{

// while (i<100) {

//     console.log(i);
//     i+=7;
// }
// }
// alert(`sonuncu iki reqemli eded:${i-7}`)

//!Task-02

//* Konsola N dəfə «I know how to use cycles» mesajı  yazın.
//* Proqram N ədədini istifadəçidən soruşur.

// let n = Number(prompt(`Eded daxil edin`))
// i = 1
// while (i <= n) {
//     console.log(`I know how to use cycles ${i}`);
//     i += 1
// }

//!Task-03

//*Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

// let i=100;
// while (i<999) {
//     console.log(i);
//     i+=10;
// }

//!Task-04

//*Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

// let i=11;
// let sum=0;
// while (i<100) {
//     console.log(i)
//     sum+=i
//     i+=2
// }
// console.log(`Total = ${sum}`);


//!Task-05

//*İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.

// let num=+prompt(`Eded daxil edin:`)
// let i=100
// let sum=0
// while (i<1000) {
// if (i%num ===0) {
//     console.log(i);
//     sum+=i
//     }
// i++;
// }
// console.log(`Total = ${sum}`);

//!Task-06

//* Sadə ədədləri çıxaran proqram yazın.
//* İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün sadə ədədləri azalan ardıcıllıqla çıxaran proqram yazın.
//* «23» ədədi daxil edildikdə, konsola «23», «19», «17», «13», «11», «7», «5», «3», «2», «1» ardıcıllığı çıxarılmalıdır.

// let i = +prompt("Zəhmət olmasa, bir ədəd daxil edin:");
// let result=""
// while (i >= 0) {
//     let sade = true;
//     if (i > 1) {
//         let j = 2;
//         while (j <= Math.sqrt(i)) {
//             if (i % j === 0) {
//                 sade = false;
//                 break;
//             }
//             j++;
//         }
//     } else {
//         sade = false;
//     }

//     if (sade) {
//         result+=`${i}/`
//     }

//     i--;
// }

// console.log(result);

//!Task-07

//* 10-a qədər bütün reqemlerin hasilin tapan proqram tərtib edin
//* Alınan dəyəri konsola çıxarın.

// let j=1
// for (let i = 1; i < 11; i++) {
//     console.log(i);
//     j=j*i
// }
// console.log(`Toplam hasil = `+ j);

//!Task-08

//*İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.

// let inputtext = prompt("Mətn daxil edin:");
// let reversedtext = "";
// for (let i = inputtext.length - 1; i >= 0; i--) {
//     reversedtext += inputtext[i];
// }
// console.log(`${inputtext}-mətnin əks forması:  ${reversedtext} `);

//!Task-09

//*Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

// let text=prompt(`Icerisinde "." olan metin daxil edin:`)
// let a=text.length-1
// for (let i = 0; i <= a; i++) {
//     if (text[i]===".") {
//         console.log(`Mətndə olan "." işarəsinin indeksi ${i}-dir`);
//     }
// }

//!Task-10 (isNaN)

//* Mətndə rəqəmlərin olub olmadığını yoxlayan proqram yazın.
//* İstifadəçidən mətn daxil etməsini tələb edən və mətndə rəqəmlərin
//* olub-olmaması barədə konsola mesaj çıxaran proqram tərtib edin.

// let a=prompt(`Metn daxil edin:`)
// let b="1234567890.,?!@#$%^&*()/*-+"
// let c=a.length
// let result=""
// for (let i = 0; i < c; i++) {
//   if (b.includes(a[i])) {
//     result+=a[i]
//   }
// }
//     alert(`QADAGAN OLUNMUS SIMVOL- ${result}`);
