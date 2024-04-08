//!Task-01
//*Konsola mesaj verin: «My name is Elmin».

//console.log("My name is Elmin");

//!Task-02
//*Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin.
//*Bu dəyişənin dəyərini konsolda göstərin

//let firstName="Elmin";
//console.log(firstName);

//!Task-03
//*Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
//*Birdən çox variant seçin.

//person
//$add

//!Task-04
//*Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
//*Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
//*və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
//*Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.

// let bookPrice = 750;
// let bookAmount = 14;
// let totalPrice = bookPrice*bookAmount;
// console.log(totalPrice);

//!Task-05
//*Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
//*kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə»
//*dəyərini saxlayır.msSpeed ​​dəyişəni təyin edin və
//*ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
//*msSpeed dəyişəninin dəyərini konsola çıxarın.

// let kmhSpeed = 75;
// let msSpeed = kmhSpeed*10/36;
// console.log(msSpeed)


//!Task-06
//*İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı
//*günlərin sayını göstərən proqram yazın.

//let date=prompt("Dogum ilinizi yazin:");
// let now=2024;
// let day=(now-date)*365;
// console.log(`Sizin yasadiginiz gun sayi: ${day} `);

//!Task-07
//*Ədədlər üzərində əməliyyatları yerinə yetirin.
//*num dəyişənində iki rəqəmli ədəd saxlanılır.
//*Konsola çıxaran belə proqram yazın:
//*- Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
//*- 3 - ə bölünmədən qalan bu ədədin qalığını.

//let num=22;
// let numm=num**5;
// let nummm=num%3;

//!Task-08
//*Konsola bu növ mesaj çıxarın “Sizin adınız[firstName][lastName].
// *Tanışlığımıza çox şadam!”
//* firstName dəyişənində istifadəçinin adı,
//* lastName — dəyişənində isə soyadı saxlanır.
//*Konsola bu növ mesaj çıxarın “Sizin adınız[firstName][lastName].Tanışlığımıza çox şadam!”

//let firstName = 'Alan';
// let lastName = 'Turing';
// console.log(`Sizin adiniz ${firstName}  ${lastName} .Tanışlığımıza çox şadam!`)

//!Task-09
//*Şablon mətnlərdən istifadə edərək,
//*konsola “Sizi bir daha görməyimizə şadıq, [firstName][lastName]”.
//*firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.

//let firstName="Mery";
// let lastName="Raisy";
// console.log(`Sizi bir daha görməyimizə şadıq ${firstName} ${lastName} .`)

//!Task - 10
//*Addaki hərflərin sayını konsola çıxarın.
//*fullName dəyişənində istifadəçinin tam adı saxlanılır.Addaki hərflərin sayını konsola çıxarın.
//*Probel hərf olaraq sayılmır.

// let fullName = "Elmin Qasimov"
// console.log(fullName.length);

//!Task - 11
//*İstifadəçinin ad soyadının baş hərflərini konsola çıxaran proqram yazın.
//*İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın.
//*fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini
//*konsola çıxaran proqram yazın.

// let fullName="Elmin Qasimov"
// console.log(`${fullName.charAt(0)} ${fullName.charAt(6)}`);

//!Task - 12
//*İstifadəçidən tam adını daxil etməyini istəyin və soyadı ilə adının yerini dəyişin.
//*İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.
//*Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

// let firstName=prompt("AD yazın:");
// let lastName=prompt("SOYAD yazın:");
// console.log(`${lastName} ${firstName}`);

//!Task - 13
//*Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.
//* İstifadəçidən adını daxil etməsini istəyin.
//* Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.

// let firstName=prompt("Adinizi yazin");
// console.log(`Salam, ${firstName}`);

//!Task - 14
//* İki ədədin toplama, çıxma, vurma və bölməsinin nəticələrin konsola alt - alta 4 sətir olaraq çıxarın.
//* İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
//* Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola
//* alt - alta 4 sətir olaraq çıxarın.

// let num1=prompt("Birinci ededi daxil et:");
// let num2=prompt("Ikinci ededi daxil et:");

// console.log( Number(num1)+Number(num2));
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);

//!Task - 15
//* 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6 - cı rəqəmini tapan proqram yazın

// let num1="12345";
// let num2="98765";
// let idk=String(num1 * num2);
// console.log(`12345 * 98765  = ${idk}`);
// console.log(`Hasilin 6-ci reqemi ise ${idk.charAt(5)}dir`);

//!Task - 16
//*Əməliyyatların nəticəsini müəyyənləşdirin.

/* "" + 1 + 0 =

"" - 1 + 0 =

"true" - false =

6 / "3" =

4 + 5 + "px" =

"$" + 4 + 5 =

"4" - 2 =

"4px" - 2 + "px" =

7 / 0 =

"-9" + 5 =

"-9" - 5 =

null + 1 =

undefined + 1 =*/

//!Task - 17
//*Rəqəmlərin cəmini göstərən proqram yazın.
//*İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və
//*sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın.

// let num=prompt(`4 reqemli eded yazin:`);
// let total=Number(num.charAt(0)) + Number(num.charAt(1)) + Number(num.charAt(2)) + Number(num.charAt(3));
// console.log(total);

//!Task - 18
//*İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.
//*Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
//*konsola «Salam,'ad'!» mesajını çıxarır.

// let Name=prompt("Soyad ve Adinizi yazin:");
// let words=Name.split(" ");
// console.log(`Salam, ${words[1]}!`);

//!Task-19
//* Qiyməti mətn halına salan proqram tərtib edin.
//* İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və
//* qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.

// let price=prompt("Qiymet daxil edin(Qeyd:530.90 formatinda olsun):")
// let p1=price.split(".")
// console.log(` ${p1[0]} manat , ${p1[1]} qepik `);

//!Task-20
//* Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.
//* Proqram istifadəçidən əmək haqqı məbləğin soruşur və
//* 13% vergi istisna olmaqla məbləği konsola çıxarır.

// let fix=prompt("Fix emekhaqqini daxil edin:")
// let net=fix-(fix*13/100)
// console.log(`Sizin net emekhaqqiniz : ${net} manat.`);

//!Task-21
//* İstifadəçidən soyad, ad və ata adını istəyən,
//* soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
//* Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.».

// let fullName=prompt("Soyad Ad Ata adini muvafiq olaraq qeyd edin")
// let surName=fullName.split(" ")
// console.log(`${surName[0]} ${surName[1][0]}.${surName[2][0]} `);

//!Task-22
//* Depozitdən mənfəətin hesablanması üçün proqram yazın.
//* Proqram istifadəçidən əmanətin məbləğini, müddətini və
//* faiz dərəcəsini daxil etməsini istəyir və gözlənilən mənfəəti hesablayır.

// let dt=prompt("3 illik emanet edilen depozitin meblegini qeyd edin:")
// let pc=prompt("illik faiz derecesini qeyd edin:")
// let yr1=Number(dt) +(dt*pc /100)
// let yr2=Number(yr1) +(yr1*pc /100)
// let yr3=Number(yr2) +(yr2*pc /100)
// console.log(`Sizin 3 illik menfeetiniz ${yr3}-dir.`);

//!Task-23
//* Müxtəlif müqayisə operatorları ilə 5 ifadə yazın.
//* value dəyişəni üçün müxtəlif müqayisə operatorları ilə 5 ifadə yazın,
//* hansıki əməliyyat nəticəsi value = 10 üçün true və value = 20 üçün false olacaq.

// let value=20
// let var1=5
// console.log(value<15 );
// console.log(value<=10);
// console.log(value==10);
// console.log(value-var1==5);
// console.log(value*var1<55);

//!Task-24
//* İstifadəçidən yaşını soruşun.
//* Əgər yaşı 18-dən azdırsa, o zaman brauzerdə «Access denied» bildirişi çıxarın.
//* Əks halda «Access granted» bildirişini çıxarın.

// let age=prompt("Yasinizi daxil edin:")
// if (age>18) {
//     console.log("«Access granted»");
// }else{
//     console.log("«Access denied»");
// }

//?Task-25
//* Üç ədədin ortancılını tapmaq üçün proqram yazın.
//* İstifadəçidən bir bildirişlə üç ikirəqəmli ədəd daxil etməsini xahiş edin.
//* Konsola orta ədədi, yəni nə ən böyüyü, nə də ən kiçiyini çıxarmayın.
//* İstifadəçi bir neçə eyni nömrə daxil edibsə, xəta bildirişi çıxarın.
//* "45 46 47"
//* "47 46 45"
//* "46 45 47"
//* "46 47 45"

// let num=prompt("Bosluq buraxaraq 3 defe ikireqemli eded qeyd edin: ")
// let cut=num.split(" ")
// let a=Number(cut[0]);
// let b=Number(cut[1]);
// let c=Number(cut[2]);
// if (a>b && b>c) {
//     console.log(b);
// }
// else if (b>a && a>c) {
//     console.log(a);
// }
// else if (c>b && b>a) {
//     console.log(b);
// }
//  else if (c>a && a>b) {
//     console.log(a);
// }
//  else if (b>c && c>a) {
//     console.log(c);
// }
// else if (a>c && c>b) {
//     console.log(c);}

//!Task-26
//*İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.
//*Uzun il 4-ə qalıqsız bölünən ildir.
//*Daxil edilmiş il uzun ildirsə, konsola mesaj cıxarın.
//*«İl uzun il deyil» və ya «İl uzun ildir»mesajını çıxarın.

// let year=prompt("il daxil edin:")
// let yr1=year%4
// if (yr1 === 0) {
//     alert(`${year} İl uzun ildir`);
// }else{
//     alert(`${year} İl uzun il deyil`);
// }

//!Task-27
//* if...else operatoru ilə yazllmış kodu switch operatoruna dəyişdirməklə kodu yenidən yazın.

// let id = prompt ('enter product id:');
// switch (id) {
//     case '1':
//         alert('Available 10 pcs.');
//         break;
//     case '2':
//         alert('Available 256 pcs.');
//         break;
//     case '3':
//         alert('Available 53 pcs.');
//         break;
//     case '4':
//         alert('There are 3 available.');
//         break;
//     default:
//         alert('Out of stock');
//         break;
// }


//!Task-28
//* İstifadəçidən onun cinsini (M və ya F hərfləri şəklində) sorğulayan və
//* gender dəyişəninə male yaxud female sözlərindən birini yazdıran proqramı yazın

// let gender=prompt("Cinsinizin bas herfini K ve ya Q seklinde qeyd edin:")
// if (gender==="K") {
//     alert("Kisi");
// }else if (gender==="Q"){
//     alert("Qadin");
// }
// else{
//     alert("Zehmet olmasa K veya Q olaraq cins yazin!");
// }

//!Task-29
//* Ayın adını mətnlə konsola yazdıran bir program yazın.
//* İstifadəçidən ayın nömrəsini soruşun və adını konsola çıxarın.

// let month=prompt("Ayı rəqəm ilə daxil edin:")

// switch (month) {
//     case "1":
//         alert("Yanvar ayı")
//         break;
//     case "2":
//         alert("Fevral ayı")
//         break;
//    case "3":
//         alert("Mart ayı")
//         break;
//     case "4":
//         alert("Aprel ayı")
//         break;
//     case "5":
//         alert("May ayı")
//         break;
//     case "6":
//         alert("Iyun ayı")
//         break;
//     case "7":
//         alert("Iyul ayı")
//         break;
//     case "8":
//         alert("Avqust ayı")
//         break;
//     case "9":
//         alert("Sentyabr ayı")
//         break;
//     case "10":
//         alert("Oktyabr ayı")
//         break;
//     case "11":
//         alert("Noyabr ayı")
//         break;
//     case "12":
//         alert("Dekabr ayı")
//         break;
//     default :
//         alert("12 ay var !!!")
// }

//!Task-30
//* İstifadəçi tərəfindən daxil edilmiş tarixin təsvirini çıxarın.
//* İstifadəçidən tarixi «2009.12.19» formatında daxil etməyi xahiş edin.
//* Tarixin təsvirini «19 Dekabr 2009-cu il» formatında çıxarın.
//* Daxil edilmiş dəyərə validator əlavə edin.
//* İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.

// let date=prompt("'2001.01.25'formatinda tarix qeyd edin:")
// let part=date.split(".")
// if (part[1]==="01") {
//     month = "Yanvar"
// } else if(part[1]==="02"){
//     month = "Fevral"
// }  else if(part[1]==="03"){
//     month = "Mart"
// }  else if(part[1]==="04"){
//     month = "Aprel"
// }  else if(part[1]==="05"){
//     month = "May"
// }  else if(part[1]==="06"){
//     month = "Iyun"
// }  else if(part[1]==="07"){
//     month = "Iyul"
// }  else if(part[1]==="08"){
//     month = "Avqust"
// }  else if(part[1]==="09"){
//     month = "Sentyabr"
// }  else if(part[1]==="10"){
//     month = "Oktyabr"
// }  else if(part[1]==="11"){
//     month = "Noyabr"
// }  else if(part[1]==="12"){
//     month = "Dekabr"
// }
// console.log(`${part[2]} ${month} ${part[0]}`);