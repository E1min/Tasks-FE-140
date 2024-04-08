//!Task-01

//* Massiv elementinin dəyərini dəyişin.
//* Üç addan ibarət massiv yaradın.
//* Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin.
//* Massivi konsola çıxarın.

// let names =["Ali","Ferid","Kenan"]
// names[2]="Classified"
// console.log(names);

//!Task-02

//* Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın.
//* Massiv elementlərin düzün.
// Episode 4: New Hope
// Episode 5: Empire strikes back
// Episode 6: Return of the Jdi

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(`Episode ${i+4}: ${arr[i]} `);
// }

//!Task-03

//* Şöbə işçilərinin əmək haqqını təhlil etmək üçün proqram tərtib edin.
//* Şöbədə müxtəlif maaşlarla 10 nəfər çalışır. Şöbə işçilərinin əmək haqlarını təhlil etmək üçün proqram tərtib edin.
//*  - Bütün bir departamentin bir il üçün ümumi maaşlarının cəmini qaytaran bir funksiya yazın.
//* salary massivi əsasında il ərzində bütün işçilərin maaşlarının cəmini qaytaran getAnnualSalary() funksiyasını yazın.
//* - Ay nömrəsinə görə işçilərin aylıq maaşlarını massiv halında almaq üçün funksiya yazın.
//* Ayın nömrəsini parametr kimi qəbul edən və salary massivindən həmin ay üçün işçi maaşlarını massiv halında qaytaran getMonthlySalary() funksiyasını yazın.
//* Ayın nömrəsi elementin indeks nömrəsi ilə eyni deyil.
//* - Rüb ərzində maaşların ümumi cəmini qaytaran funksiya yazın.
//* Parametr kimi rübün rəqəmini (1, 2, 3 və ya 4) qəbul edən və salary massivi əsasında həmin rüb üçün şöbənin bütün
//* işçilərinin maaşlarının cəmini qaytaran getQuarterSalary() funksiyasını yazın.
//* Rüb - 3 aylıq bir müddətdir.

// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 75, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];

// function getAnnualSalary(){
//     let total=0
//     for (let i = 0; i < salary.length; i++) {
//         for (let j = 0; j < 12; j++) {
//             total+=salary[i][j]
//         }
//     }
//     console.log(`Departamentin 1 illik maasi = ${total}`);

//     }
// getAnnualSalary()

// function getMonthlySalary(a) {
//     let month = [];
//     for (let i = 0; i < salary.length; i++) {
//         if (a < 0 || a > 12) {
//             console.log("0-12 araliginda ay yazin!");
//         }
//         else {
//             month.push(salary[i][a - 1])
//         }
//     }
//     return month
// }
// console.log(getMonthlySalary(prompt(`Reqemle ay daxil edin:`)));

// function getQuarterSalary(a) {
//     let totalquarter = 0
//     if (a === 1) {
//         for (let i = 0; i < salary.length; i++) {
//             for (let j = 0; j < 3; j++) {
//                 totalquarter += salary[i][j]
//             }
//         }
//         console.log(totalquarter);
//     }
//     else if (a === 2) {
//         for (let i = 0; i < salary.length; i++) {
//             for (let j = 3; j < 6; j++) {
//                 totalquarter += salary[i][j]
//             }
//         }
//         console.log(totalquarter);
//     }
//     else if (a === 3) {
//         for (let i = 0; i < salary.length; i++) {
//             for (let j = 6; j < 9; j++) {
//                 totalquarter += salary[i][j]
//             }
//         }
//         console.log(totalquarter);
//     }
//     else if (a === 4) {
//         for (let i = 0; i < salary.length; i++) {
//             for (let j = 9; j < 12; j++) {
//                 totalquarter += salary[i][j]
//             }
//         }
//         console.log(totalquarter);
//     }
//     else{
//         console.log("Rub yazin(1/2/3/4):");
//     }
// }
// getQuarterSalary(4)

//!Task-04

//*İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın.
//*İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massilə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.

// let a = prompt("Vergul ile ayrilmis ededleri yazin:")
// let b = a.split(",")
// let c = Math.min.apply(null, b);
// console.log(b);
// console.log(`En kicik eded:${c}`);



//!Task-05

//* Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.
//* '32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli vergüllə əvəz edin.(Massivden sitifade ederek)(join)

// let str="32,31,34,36,31"
// let a=str.split(",")
// let b=a.join(";")
// console.log(b);