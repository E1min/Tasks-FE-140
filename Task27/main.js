

//! Task-01

//* Qrup yoldaşları massivi yaradın və onun üzərində əməliyyatlar aparın.
//* Üç qrup yoldaşının adlarından ibarət massiv yaradın;
//* Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
//* İlk adı silin;
//* Massivi konsola çıxarın.

// let users=["Kenan","Elnur","Nihad"]
// users.push("Togrul")
// users.shift()
// console.log(users);

//! Task-02

//* Massivin maksimal dəyərini tapın.
//* 10 rəqəmdən ibarət massiv yaradın.
//* Massiv deyil, arqumentlər qəbul edən Math.max funksiyasından istifadə edərək onların arasında maksimumu tapın.
//* spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.

// let num=[65,15,54,8,48,25,99,75,14,53]

// console.log(Math.max(...num))




//! Task-03

//* Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.
//* Şirkətin 10 işçisi haqqında məlumat olan massiv verilib. development massivi yaradın,
//* hansıki proqramlaşma şöbəsinin işçilərini özündə saxlayacaq,
//* yəni department özəlliyinin dəyəri «development» olan işçiləri.

// let employees = [
//     ['Jaylee Macy', 'marketing'],
//     ['John Smith', 'management'],
//     ['Blossom Hartley', 'design'],
//     ['Austin Carpenter', 'marketing'],
//     ['Joan Knowles', 'development'],
//     ['Sally Nunez', 'management'],
//     ['Laurel Ward', 'development'],
//     ['Lark Simon', 'marketing'],
//     ['Jane Stone', 'management'],
//     ['Courtney Olson', 'development'],];
// let development = []
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i][1] === "development") {
//         development.push(employees[i][0])
//     }
// }
// console.log(`Developments:${development}`);

//! Task-04

//* Elektron növbəni idarə etmək üçün proqram tərtib edin.
//* İstifadəçidən məlumat tələb edən və növbəni yeniləyən proqram tərtib edin.
//* - İstifadəçidən növbəni yeniləmək üçün məlumat tələb edin.
//* - Əgər istifadəçi yeni müştərinin ad və soyadını daxil edibsə, proqram müştərini növbənin sonuna əlavə edir.
//* - İstifadəçi boş bir dəyər daxil edərsə, proqram növbədə birincinin adını və soyadını göstərir və onu növbədən çıxarır.
//* - İstifadəçi «=» işarəsini daxil edərsə, proqram dayanır və növbə massivini konsola çıxarır.

// let users = ["Tural Hesenov", "Fuad Memmedov", "Cavid Huseyinov"]
// let a = prompt("")
// for (let i = 0; i < users.length; i++) {
//     if (a !== "=" && a !== " " && users[i].toUpperCase() !== a.toUpperCase()) {
//         users.push(a)
//         console.log(`Siz yeni növbəyə yazıldınıız:${users.length} // ${users}`);
//         break
//     }
//     else if (a === " ") {
//         console.log(`Növbədə birinci:${users.shift()}`);
//         console.log(`Yeni cədvəl:${users}`);
//         break
//     } else if (a === "=") {
//         console.log(users);
//         break
//     }
// }

//! Task-05

//* Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola bütün mənfi ədədləri çıxaran funksiya yazın.

// let nums = [-5, 4, 8, 10, 9, -77]
// let result=nums.filter(item => item <0)
// console.log(result);

//! Task-06

//* Rəqəmlər massivini parametr kimi qəbuil edən və həmin massivdəki bütün müsbət ədədləri konsola çıxaran funksiya yazın.
//* İterasiya üçün anonim funksiyadan istifadə edin.

// let nums = [-5, 4, 8, 10, 9, -77]
// let result=nums.filter(item => item >0)
// console.log(result);

//! Task-07

//* Geri çağırış funksiyalarını yazın (callback) printWithDashes, printWithHearts, printWithIndex.
//* Massiv verilmişdir. 3 geri çağırış funksiyası yazın (callback): printWithDashes, printWithHearts, printWithIndex, hansıki onlar belə çağırılan zamanı
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

//* 0 - Michael
//* 1 - Trevor
//* 2 - Franklin
//* 3 - Lamar
//* 4 - Jimmy

//* <3<3<3<3 Michael <3<3<3<3
//* <3<3<3<3 Trevor <3<3<3<3
//* <3<3<3<3 Franklin <3<3<3<3
//* <3<3<3<3 Lamar <3<3<3<3
//* <3<3<3<3 Jimmy <3<3<3<3

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// names.forEach(printWithDashes);
// names.forEach(printWithIndex);
// names.forEach(printWithHearts);

// function printWithDashes(names) {
//     console.log(`-------------
// ${names}
// -------------`);
// }

// function printWithIndex(names,index) {
//     console.log(`${index}-${names}`);
// }

// function printWithHearts(names) {
//     console.log(`<3<3<3<3 ${names} <3<3<3<3`);
// }

//!Task-08

//* Kebab-case -də formatında olan mətni UPPER_CASE formatına çevirmək üçün funksiya yazın.
//* Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper funksiyasını yazın.
//* INPUT: console.log(kebabToUpper('first-user'));
//* OUTPUT:  FIRST_USER

// let kebab="elmin-qasimov"
// function kebabToUpper() {
//    return kebab.split("-").join("_")    
// }
// console.log(kebabToUpper().toUpperCase());

//? MAP,FILTER,FIND
//! Task-09

//* Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
//* Rəqəmlər massivi verilmişdir. Aşağıdakı kimi dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:
//* - mənfi ədədlər müsbət olublar;
//* - müsbət ədədlər ikiqat artırılıb.

// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// let newList=numbers.map((item) => {
//      if (item<0) {
//         return item * -1
//     }else if (item>0) {
//         return item *2
//     }
// } )
// console.log(newList);


//! Task-10

//* Massivin ilk üç simvoldan ibarət elementini qaytaran funksiya yazın
//* Mətnlər massivini parametr kimi qəbul edən və massivin ilk üç simvoldan ibarət elementini qaytaran funksiya yazın.

// let text=["Elmin"]
// let c=text.map((item,index)=> {
// return item=item[0]+item[1]+item[2]
// })
// console.log(c);

//! Task-11

//* A hərfi ilə başlayan orijinal massivdəki elementlərdən ibarət yeni massiv yaradın.
//* Adlar massivi verilib. A hərfi ilə başlayan orijinal massivdəki elementlərdən ibarət yeni massiv yaradın.

// let names = ["Azer", "Nigar", "Cavid", "Ayan", "Ayxan"]
// let newList = names.filter((item) => {
//     if (item[0] === "A") {
//         return item
//     }
// })
// console.log(newList);

//! Task-12

//* ƏDV xaric qiymətlər saxlayan massivini qəbul edən və ƏDV daxil olmaqla olan qiymətlərdən ibarət yeni massiv qaytaran funksiya yazın.
//* addTax() funksiyası yaradın. Verilmiş ƏDV-siz qiymətlərlə olan price massivini ona ötürün. addTax() funksiyasının köməyi ilə ƏDV ilə
//* qiymətlərin daxil olduğu massiv yaratın və onu konsola çıxarın. ƏDV 20% təşkil edir.

// let price=[100,400,500,345,410,700]
// let tax=price.map(item=> {
//       return item+item*20/100
// })
// console.log(`Edv-siz qiymet:${price}`);
// console.log(`Edv-daxil qiymet:${tax}`);

//! Task-13

//* Ədədlər massivindəki tək və cüt ədədləri saymaq üçün proqram yazın.
//* Rəqəmlər massivini parametr kimi qəbul edən və massivdə neçə tək və cüt ədədin
//* olması barədə məlumatıqaytaran countEvensAndOdds() funksiyasını yazın.
//* Numune: Funksiya «Massivdə 4 cüt və 2 tək ədəd var» formasında mesaj qaytarır.

// let numbers=[1,2,4,5,6,7,8,9,10]
// let cut=[]
// let tek=[]
// numbers.forEach(item=>{
//     if (item %2 ===0) {
//         cut.push(item)
//     }else{
//         tek.push(item)
//     }
// })
// console.log(`Cut ededlerin sayi:${cut.length}`);
// console.log(`Tek ededlerin sayi:${tek.length}`);