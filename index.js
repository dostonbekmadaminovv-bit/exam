// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2")= "<div></div><div></div>"
// Namuna("p*1") ="<p></p>"
// Namuna("li*3")= "<li></li><li></li><li></li>"
// function namuna(matn) {
//   const [teg, son] = matn.split("*");
//   return `<${teg}></${teg}>`.repeat(Number(son));
// }
// console.log(namuna("div*2"));
// console.log(namuna("p*1"));
// console.log(namuna("li*3"));
//===================================
// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.
// Namuna:
// namuna(3) ᔍ 6
// // 1 + 2 + 3 = 6
// namuna(10) ᔍ 55
// // 1 + 2 + 3 + ... + 10 = 55
// namuna(7) ᔍ 28
// // 1 + 2 + 3 + ... + 7 = 28

// function hisobla(son) {
//   let yigindi = 0;
//   for (let i = 0; i <= son; i++) {
//     yigindi += i;
//   }
//   console.log(yigindi);
// }
// hisobla(5);
// hisobla(8);
// hisobla(10);
//=====================================
// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
// Namuna:
// Namuna(4, { min: 0, max: 5 }) ᔍ true
// Namuna(4, { min: 4, max: 5 }) ᔍ true
// Namuna(4, { min: 6, max: 10 }) ᔍ false

// function tekshir(son, obj) {
//   if (son >= obj.min && son <= obj.max) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(tekshir(4, { min: 0, max: 5 }));
// console.log(tekshir(4, { min: 4, max: 5 }));
// console.log(tekshir(4, { min: 6, max: 10 }));
// console.log(tekshir(5, { min: 5, max: 5 }));
//===========================================
// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.
// Namuna:
// Namuna(1) ᔍ true
// Namuna(3) ᔍ false
// // 3^2 = 9
// Namuna(6) ᔍ true
// // 6^2 = 36 (ends with 6)
// Namuna(95) ᔍ false
// // 95^2 = 9025 (does not end with 95)

// function hisobla(son) {
//   return String(son ** 2).endsWith(String(son));
// }
// console.log(hisobla(1));
// console.log(hisobla(3));
// console.log(hisobla(6));
// console.log(hisobla(95));
//===============================================
// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.
// Namuna:
// Namuna([0, 0, 0, 0, 0]) ᔍ [0, 1, 2, 3, 4]
// Namuna([1, 2, 3, 4, 5]) ᔍ [1, 3, 5, 7, 9]
// Namuna([5, 4, 3, 2, 1]) ᔍ [5, 5, 5, 5, 5]

// function qoshish(son) {
//   let yangiMassive = [];
//   for (let i = 0; i < son.length; i++) {
//     yangiMassive.push(son[i] + i);
//   }

//   return yangiMassive;
// }
// console.log(qoshish([0, 0, 0, 0, 0]));
//================================================
// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
//cola
// fanta
// Namuna:
// Namuna(["fanta", "cola", "water"]) ᔍ ["water"]
// Namuna(["fanta", "cola"]) ᔍ []
// Namuna(["lemonade", "beer", "water"]) ᔍ ["lemonade",
// "beer", "water"]

// function aniqla(ichimliklar) {
//   return ichimliklar.filter(
//     (ichimliklar) => ichimliklar !== "cola" && ichimliklar !== "fanta",
//   );
// }
// console.log(aniqla(["fanta", "cola", "water"]));
// console.log(aniqla(["fanta", "cola"]));
// console.log(aniqla(["limonade", "beer", "water"]));
//=========================================
// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.
// Namuna:
// Namuna(123) ᔍ 3
// Namuna(56) ᔍ 2
// Namuna(7154) ᔍ 4
// Namuna(61217311514) ᔍ 11
// Namuna(0) ᔍ 1
// function qaytarsin(son) {
//   return String(son).length;
// }
// console.log(qaytarsin(1));
// console.log(qaytarsin(1234));
// console.log(qaytarsin(25486655225));
// console.log(qaytarsin(1547865));
//===========================================
// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.
// Namuna:
// Namuna(123) ᔍ 321
// Namuna("001") ᔍ 100
// Namuna(999) ᔍ 999
// function hisobla(son) {
//   return Number(
//     String(son)
//       .split("")
//       .sort((a, b) => b - a)
//       .join(""),
//   );
// }
// console.log(hisobla(123));
// console.log(hisobla("001"));
// console.log(hisobla(999));
// console.log(hisobla(784));
//============================================
// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.
// Namuna:
// Namuna(5, 9) ᔍ 7
// Namuna(5, 9) ᔍ 9
// Namuna(5, 9) ᔍ 5

// function hisobla(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(hisobla(5, 9));
// console.log(hisobla(5, 9));
// console.log(hisobla(5, 9));
//================================
// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
// Namuna:
// Namuna(153) ᔍ true
// // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// Namuna(370) ᔍ true
// Namuna(1652) ᔍ false

// function korish(son) {
//   let raqam = String(son);
//   let daraja = raqam.length;
//   let result = 0;
//   for (let i = 0; i < raqam.length; i++) {
//     result += Number(raqam[i] ** daraja);
//   }
//   return result == son;
// }
// console.log(korish(153));
// console.log(korish(123));
// console.log(korish(370));
// console.log(korish(1652));
//=======================================
// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.
// Namuna:
// Namuna("fvLzpxmgXSDrobbgMVrc") ᔍ 6
// Namuna("JMZWCneOTFLWYwBWxyFw") ᔍ 14
// function string(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(string("fvLzpxmgXSDrobbgMVrc"));
// console.log(string("JMZWCneOTFLWYwBWxyFw"));
