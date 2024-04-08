//!Task-01

//* Konsola doğum tarixini çıxarın.
//*     Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın(name, gender, birthday).
//* Konsola doğum tarixini çıxarın.

// let user ={
//     name:"Elmin",
//     gender:"Male",
//     birthday:"01.04.1996",
// }
// console.log(user.birthday);

//!Task-02

//* Bu obyektə yaş(age) əlavə edin və doğum tarixini silin.
//* Alınmış obyekti konsola çıxarın.

// let user ={
//     name:"Elmin",
//     gender:"Male",
//     birthday:"01.04.1996",
// }
// delete user.birthday
// user.age=27
// console.log(user.age);

//!Task-03

//* Obyektə metodlar əlavə edin.
//*     setAge — istifadəçi yaşını dəyişdirən metoddur.
//*         getYearsBeforeRetirement — pensiyaya qədər istifadəçinin
//*  qalan illərinin sayını qaytaran metoddur.
//* Bu metodları çağırın.

// let user = {
//     name: "Elmin",
//     gender: "Male",
//     age: 27,
//     setAge: (a) => {
//         return user.age = a
//     },
//     getYearsBeforeRetirement() {
//         return 65 - user.age
//     }

// }
// console.log(`Deyisilen yas: ${user.setAge(40)}`);
// console.log(`Pensiyaya qalan yas: ${user.getYearsBeforeRetirement()}`);

//?Task-04

//* Müştəri Kredit kartı ilə işləmək üçün obyekt yaradın.
//* Müştərinin hesabı haqqında əsas məlumatları və onunla işləmə metodlarını əhatə edən client obyekti yaradın.
//*     =>client obyekti yaradın.
//*     Kredit kartı müştərisi üçün aşağıdakı xüsusiyyətlərə malik obyekt yaradın:
//* - Tam adı müştərinin(fullName).
//*     - Kredit limiti(creditLimit).
//*     - Cari balans(balans).
//*     - Minimum ödənişin faizi(precentOfMinPayment).
//*     =>Cari balans əldə etmək üçün getBalance metodu əlavə edin.
//*     getBalance metodu, balans mənfi olarsa, müştərinin balansı və ya onun borcu haqqında bir mesaj qaytarır.
//*     Metodun çağırılma nümunəsi:
//* console.log(client.getBalance()).
//*     Mesaj nümunələri:
//*     «Balansınız 3000»,
//*     «Borcunuz 2000».
//*      =>Minimum ödəniş məbləği üçün getMinPaymant metodunu əlavə edin.
//*     getMinPaymant metodu borc məbləği və minimum ödəniş faizinə əsasən formalaşan minimum
//*     ödəniş məbləği haqqında mesaj qaytarır.
//*     Əgər borc yoxdursa, metod müvafiq mesajı qaytarır.
//*     Metodun çağırılma nümunəsi:
//* console.log(client.getMinPaymant()).
//*     Mesaj nümunələri:
//*     «Minimum ödənişiniz 240»,
//*     «Sizin borcunuz yoxdur».
//*      =>Hesabdan pul silmək üçün withdraw metodu əlavə edin.
//*     withdraw metodu cari balansı parametr kimi ötürülən pul məbləği qədər azaldır.
//*     Mövcud vəsait kifayət deyilsə(cari balans və kredit limitinin cəmi), metod konsola müvafiq mesajı çıxarır.
//*     client.widthdraw(900)
//*      =>Hesaba pul əlavə etmək üçün refill metodu əlavə edin.
//*     refill metodu parametr kimi qəbul edilən məbləğ qədər balansı artırır.

//!Task-05

//* Kalkulyator obyekti yaradın.
//* Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
//*     - Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin.
//*     Metodlar parametr kimi 2 ədəd götürür və bu ədədlər üzərində müvafiq əməliyyatın nəticəsini qaytarır.
//*     Yaddaşla işləmək imkanı əlavə edin.
//*     - Obyektə dəyəri saxlamaq üçün özəllik əlavə edin. Onunla işləmək üçün metodlar yaradın:
//*    dəyərin yaddaşda saxlanması, yaddaşın təmizlənməsi, yaddaşdan dəyərin oxunması.

// let calculator={
//     result:0,
//     add: function (a,b) {
//         this.result=a+b
//         return this.result
//     },
//     subtract:function (a,b) {
//         this.result=a-b
//         return this.result
//     },
//     multiply:function (a,b) {
//         this.result=a*b
//         return this.result
//     },
//     divide:function(a,b) {
//         if (b===0) {
//             return "0-a bolunme olmaz!"
//         }
//         this.result=a/b
//         return this.result
//     },
//     clear:function () {
//         this.result=0
//         return this.result
//     },
//     addVar:function (number) {
//         this.result=number
//         return this.result
//     },
//     readVar:function () {
//         return this.result
//     }
// }
// console.log(`Toplama:a+b=${calculator.add(15,5)} `);
// console.log(`Cixma:a-b=${calculator.subtract(150,50)}`);
// console.log(`Vurma:a*b=${calculator.multiply(20,6)}`);
// console.log(`Bolme b=0 olarsa cavab:${calculator.divide(100,0)}`);
// console.log(`Normal bolme:${calculator.divide(99,3)}`);
// console.log(`Deyer elave edirik:${calculator.addVar(99)}`);
// console.log(`Elave etdiyimiz deyeri oxuduruq: ${calculator.readVar()}`);
// console.log(`Yaddasi sifirlayiriq:${calculator.clear()}`);
