
//1-masala:.Uchta parametr ichidan maximum va minumum sonlarni aniqlovchi function yarating
//     let a = +prompt("birinchi sonni kiriting")
//     let b = +prompt("ikkinchi sonni kiriting")
//     let c = +prompt("uchinchi sonni kiriting")

//  function maximum(a, b, c){
//     alert(Math.max(a, b, c))
//     alert(Math.min(a, b, c))
//  }
// console.log(maximum(a, b, c))

//2-masala:Bizda N ta niqob bor A ta odam. N ta niqob A ta odamga nechtadan tushishini hisoblovchi function yarating
function niqob (n, a){
    for ( let i = 1; i < n; i++ ){
        let n = +prompt("niqoblar sonini kiriting")
        let a = +prompt("odamlar sonini kiriting")
        return i = n / a
    }
}
console.log(niqob(20, 4))

//3-masala:Ikki honaliy soning birinchi raqamini qaytaruvchi function yarating
// let a = +prompt("son kirit")
// let b = +prompt("son kirit")
// function almashuvchi(a, b){
// alert(a, b)
// }
// console.log(almashuvchi(a, b))


//4-masala:4.Ikkita butun son berilgan, ularni o'rnini almashtiruvchi dastur tuzing
let a = +prompt("son kirit")
let b = +prompt("son kirit")
function butun (a, b){
    return a + '' + b
}
console.log(butun(b,a));