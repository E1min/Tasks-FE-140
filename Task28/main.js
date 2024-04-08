//! Task-01(rest-in istifadesi)

//* Massiv üzərində əməliyyatlar aparın.
//* 10 ədəddən ibarət massiv yaradın.
//* İlk 2 ədədi dəyişənlərə yazın və qalanlardan yeni massiv yaradın.

// let num=[3,21,56,5,68,44]
// let [bir,iki,...other] = num
// console.log(other);

//! Task-02

//* Massivin maksimal dəyərini tapın.
//* 10 rəqəmdən ibarət massiv yaradın.
//* Massiv deyil, arqumentlər qəbul edən Math.max funksiyasından istifadə edərək onların arasında maksimumu tapın.
//* spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.

// let nums=[9,14,7,22,20,10]
// console.log(Math.max(...nums));

//!Task-03

//* Massivin bütün elementlərinin dəyərin ikiqat artırın.
//* 5 rəqəmdən ibarət massiv yaradın.
//* Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.
//* Orijinal massivin dəyişmədiyini yoxlayın.

// let num1=[65,26,15,88,77]
// let num2=num1.map(item=>{
//  return item*2
// })
// console.log(num1);
// console.log(num2);

//!Task-04

//* Tam ədədlər massivini artan sırada düzən funksiya yazın.
//* Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri
//* qaytaran sortArray funksiyasını yazın.

// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
// let sortArray = array.sort((a, b) => {
//   return a - b
// })
// console.log(sortArray);

//!Task-05

//* Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola bütün mənfi ədədləri çıxaran funksiya yazın.

// let nums=[1, -6, 34, 5, 1, -4, 54, 76, 23, -65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22]
// let nums1=nums.filter(item=>{
//     if (item<0) {
//       return item
//     }
// })
// console.log(nums1);

//!Task-06

//* Rəqəmlər massivini parametr kimi qəbuil edən və həmin massivdəki bütün müsbət ədədləri konsola çıxaran funksiya yazın.
//* İterasiya üçün anonim funksiyadan istifadə edin.

// let nums=[1, -6, 34, 5, 1, -4, 54, 76, 23, -65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22]
// let num1=nums.filter(item=>{
//   if (item>0) {
//     return item
//   }
// })
// num1.sort((a,b)=>{
//   return a-b
// })
// console.log(num1);

//!Task-07

//*Geri çağırış funksiyalarını yazın (callback) printWithDashes, printWithHearts, printWithIndex.
//*Massiv verilmişdir. 3 geri çağırış funksiyası yazın (callback): printWithDashes, printWithHearts, printWithIndex, hansıki onlar belə çağırılan zamanı
//* OUTPUT:
//* kosnsolda çıxsın:
//* -------------
//* Michael
//* -------------
//* -------------
//* Trevor
//* -------------
//* -------------
//* Franklin
//* -------------
//* -------------
//* Lamar
//* -------------
//* -------------
//* Jimmy
//* -------------
//* <3<3<3<3 Michael <3<3<3<3
//* <3<3<3<3 Trevor <3<3<3<3
//* <3<3<3<3 Franklin <3<3<3<3
//* <3<3<3<3 Lamar <3<3<3<3
//* <3<3<3<3 Jimmy <3<3<3<3
//* 0 - Michael
//* 1 - Trevor
//* 2 - Franklin
//* 3 - Lamar
//* 4 - Jimmy

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// names.forEach(printWithDashes);
// function printWithDashes(names) {
//   console.log(`--------------
//   ${names}
// --------------`);
// }

// names.forEach(printWithHearts);
// function printWithHearts(names) {
//   console.log(`<3<3<3<3
// ${names}
// <3<3<3<3`);
// }

// names.forEach(printWithIndex);
// function printWithIndex(names,index) {
//   console.log(`${index} - ${names}`);
// }