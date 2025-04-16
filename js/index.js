// // // Ma'lumot turlari
// //
// // // 1. Primitive
// // // 2. Non-Primitive (Object)
// qiymat ozgaruvchan murojar qiladgan manzilda korsatilgan boshqa manzilda  joylashgan bo'ladi
// //
// // // Primitive  - qiymat togridan togri ozgaruvchan murojat qiladigan manzilda joylashadi
// //
// // // 1. Number  - sonlar saqlovchi malumot turi ( Biz bilgan int)
// // let raqam = 34
// // console.log(raqam)
// //
// //
// //
// // // 2. String - matn saqlovchi malumot turlari
// // let ism = 'Gayratjon'
// // console.log(ism)
// //
// //
// //
// // // 3. boolean  -  mantiqiy malumot turi
// // let hasMoney = false
// // console.log(hasMoney)
// //
// //  // 4. Undefined  -  hali aniqlanmagan malumot turi
// // let foo
// // console.log(foo)
// //
// // // 5. Null  -  qiymatga ega bolmagan malumot turi
// //
// // let bar = null
// // console.log(bar)
// //
// //
// //
// // // 6. symbol  -  yagona va unikal o'zgarmas qiymatga ega malumot turi
// //
// // let id = Symbol('id')
// // console.log(id)
// //
// // // 7. BigInt -  katta sonlarni saqlovchi malumot turi
// //
// // const big  = BigInt( 34278937649)
// // console.log(big)
// //
// //
// //
// // // Type conversion
// //
// // let fo = '15'
// // //typeOf malumotni turini  aniqlash uchun ishlatiladi
// // console.log(typeof fo)
// //
// //
// // // stringni numberga aylantirildi Number() metodi orqali
// // // let baz = Number(fo)
// // let baz = +fo
// // console.log(typeof baz)
// //
// //
// //
// //
// //
// // 2. string
//
// // malumotni stringga ozgartirish uchun String () metodidan foydalanamiz
// let bar = 34
// let goo = String(bar)
// // console.log(typeof goo)
//
//
// // qisqartma shakkli
//
// console.log(typeof goo + '')





// let bar = 0
// let foo = Boolean(bar)
//
// console.log(typeof foo)
//
// // console.log(bar + '')
// console.log(!!bar)



// Js'da string metodlari
//
// let foo = 'hello world'
// let bar = 'salom dunyo'
//
// let test = 'İSTANBUL'
// console.log(test.toLocaleLowerCase('tr-TR'))
// console.log(foo.length)
// console.log(bar.indexOf('s'))
// console.log(bar.lastIndexOf('l'))
// console.log(foo.slice(0,6))
// console.log(foo.split(  ' '))
// console.log(foo.toLocaleLowerCase())
// console.log(foo.toLowerCase())
// console.log(foo.toLocaleUpperCase())
// console.log(foo.trim()) // boshida va oxiridagi bosh joylarni olib tashlaydi
// console.log(foo.includes('h')) // ichida shu malumot bormi yoqmi tekshiradi va boolean qaytaradi
// console.log(foo.replace('llo' , 'yy'))








// JS'da arrey metodlar
//
//
//
// console.log(nums.length)
//
// nums.push(9)     // koplikni oxiriga berilgan qiymay
// console.log(nums)
//
// nums.pop(9)     // koplikni oxiridan ochirib tashlaydi
// console.log(nums)
//
// nums.unshift(9)     // koplikni boshiga berilgan qiymay
// console.log(nums)
//
// nums.shift(9)     // koplikni boshiga berilgan qiymay
// console.log(nums)
//
//
// console.log(nums.includes(4))
//
//
// let nums = [1, 2, 3, 4, 5]
//
// //
// let bar = nums.map(son => son +3)
// // // bu method koplik elementlarini har birini aylanib chiqadi va parametr
// // // sifatida berilgan funsiya mantigini bajaradi
//
// console.log(bar)
// let bazz = nums.filter(ell => ell > 2)
// console.log(bazz)

// JS'da function

// jsda ikki xil function yaratish usuli bor

// 1, expression

// function bar(a){
//     console.log(a)
// }
// bar(3)
//
// // 2. arrow function
// // buni ham bir nechta usuli bor
//
//
//   const bazz = (a) => {
//     console.log(a)
// }
//
// bazz(43)
//
//
// const  foo = () =>console.log('hello www')
//
// foo()



// JS'da obyektlar

// 1, Obyekt yaratish

let user = {
    name: 'Gayrstjon',
    age : 23,
    isTeacher : false,
}
console.log(user)
// obyektni hususiyatlariga murojat qilish
console.log(user.name)
console.log(user.age)



// yangi hususiyat qoshish

user.isMarried = false

console.log(user)

// hususiyatni ochirib tashlash uchun deletedan foydalanamiz

delete user.isTeacher
console.log(user)




















