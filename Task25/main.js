//!Task-01

//* İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
//* İstifadəçi adını parametr kimi qəbul edən və konsola
//* «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
//* Funksiyanı 3 müxtəlif ad üçün çağırın.

//  function func1(username) {
//     console.log(` ${username} is active now `);
// }
// func1("Elmin")
// func1("Elmin1")
// func1("Elmin_1")

//!Task-02

//* Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
//* Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
//* Fərqli arqumentlərlə funksiyanı üç dəfə çağırın

// function Maxnum(a, b, c) {
//     if (a>b && a>c) {
//         console.log(a);
//     }else if (b>a && b>c){
//         console.log(b);
//     }else if (c>a && c>b){
//         console.log(c);
//     }else{
//         console.log("Tekrar Reqem");
//     }
// }

// Maxnum(645,544,56)
// Maxnum(13,13,13)
// Maxnum(3,2,1)

//!Task-03

//* Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
//* Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
//* cəmin rublla göstərən funksiya yazın.
//* Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
//* Bir dollar üçün məzənnə 75 rubl təşkil edir.
//* Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.

// function Balance( rubl , usd) {
//     console.log(`Rubl = ${rubl+(usd*75)}`);
// }
// Balance(1000,100)

//!Task-04

//* Klaviaturadan 1-dən 99-da daxil olmaqla daxil edilmiş ədədi mətnlə ​​yazan funksiya tərtib edin.
//* İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və
//* onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.
//* Birdən ona qədər rəqəmin daxil edilməsi zamanı boşluqsuz bir söz göstərilir.(bir ,iki, üç və.s)
//* Hər hansı digər iki rəqəmli rəqəmi daxil edilməsi zamanı, boşluqla ayrılmış iki söz göstərilir,
//* məsələn, "iyirmi bir".

// function numtext(a) {
//     let teklik="sifir bir iki uc dord bes alti yeddi sekkiz doqquz"
//     let onluq =" on iyirmi otuz qirx elli altmis yetmis seksen doxsan"
//     let b=String(a)
//     if (a<10) {
//         let c=teklik.split(" ")
//         console.log(c[a]);
//     } else if (a>9 && a<100 && a%10===0) {
//         let d=onluq.split(" ")
//         console.log(d[b[0]]);
//     }else if (a>9 && a<100 && a%10 !==0) {
//         let c=teklik.split(" ")
//         let d=onluq.split(" ")
//         console.log(`${d[b[0]]} ${c[b[1]]}`);
//     }else {
//         console.log("100-den boyuk olmaz! ");
//     }
// }
// numtext(65)


//!Task-05

//*Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.

// function minnum(a, b) {
//     if (a>b) {
//         console.log(b);
//     }else if (a<b)
// {
//         console.log(a);
//     }else{
//         console.log("Tekrar reqem");
//     }
// }
// minnum(654,164)

//!Task-06

//* Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
//* bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
//* Məsələn, calc(4, 6, '+');  //  10 qaytaracaq

// function calc(a, b, c) {
//     switch (c) {
//         case "+":
//             console.log(a + b);
//             break;
//         case "-":
//             console.log(a - b);
//             break;
//         case "*":
//             console.log(a * b);
//             break;
//         case "/":
//             console.log(a / b);
//             break;
//         default:
//             break;
//     }
// }
// calc(101,10,"+")

//!Task-07

//* Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
//* Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
//* olduğunu yoxlayan isLucky funksiyasını yazın.
//* Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
//* Məsələn, isLucky(234801);  // true qaytaracaq

// function islucky(number) {
//    let  b= String(number)
//     let c=+b[0] + +b[1] + +b[2];
//     let d=+b[3] + +b[4] + +b[5];
//     if (c===d) {
//         return ("Ugurlu reqemdir");
//     }else{
//         return("ugurlu deyil")
//     }
// }
// console.log(islucky(123321));

//!Task-08

//* capitalizeWords funksiyasını yazın.
//* Funksiya parametr kimi bir neçə sözdən ibarət mətn qəbul edir.
//* Funksiya geriyə eyni mətni qaytarmalıdır, lakin içindəki hər söz böyük hərflə başlamalıdır.
//* Məsələn, capitalizeWords('Hello my name is Harry')// 'Hello My Name Is Harry' qaytaracaq.

// function capword(a) {
//     let b=String(a).split(" ")
//     let result =""
//     for (let i = 0; i < b.length; i++) {
        
//         result=result+`${b[i][0].toUpperCase()+b[i].slice(1)} `
//     }
//     console.log(result);
// }
// capword('hello my name is harry')

//!Task-09
//*Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
//*tək olduqda isə false qaytaran isEven () funksiyasını yazın.

// function isEven(a) {
    
//     if (a%2===0) {
//         console.log("True");
//     }
//     else {
//         console.log("False");
//     }

// }
// isEven(49)

//!Task-10
//*Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
//*Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
//*+71234567890

// function isvalidnumber(a) {
//     let b=String(a)
//     if (b.length===12 && b[0]==="+" && b[1]==="7") {
//         console.log("True");
//     }
//     else{
//         console.log("Nomre yalnisdir.");
//     }
// }
// isvalidnumber("+70504545454")

//!Task-11
//*Mətni parametr kimi qəbul edən və bu mətndəki herflerin sayını qaytaran numCounter funksiyasını yazın.
//*"15263538479359486()-="';:!@#$%^&*()"
///*REGEX()

// function numCounter(a) {
//     let x=String(a)
//     let b=" 0123456789()-+=\"';:!@#$%^&*().\\"
//     let result =""
//     for (let i = 0; i <= x.length; i++) {
//        if (b.includes(x[i])) {
//         result+=x[i]
//     }
// }
// console.log(`Simvollarin sayi:${result.length} (${result})`);
// console.log(`Herflerin sayi:${x.length-result.length}`);
// }
// numCounter("Elmin 1905")

