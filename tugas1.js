/*
Tugas 1

Buatlah sebuah file dan isi ketentuan di bawah:
1. buatlah variable xp dengan value 0, health dengan value 100, fighting style tanpa initialize valuenya
   lalu assign string warrior ke variable fighting style, inventory dengan value array of string, profile dengan value object yang memiliki property name dan type string, 
   race dengan tipe string, dan gender dengan type boolean
2. buatlah sebuah variable dengan nama nilai, dan buatlah percabangan if dan switch case dengan menggunakan variable tersebut sebagai indikator kondisinya
3. buatlah sebuah prulangan angka dari 1 - 100 denganketentuan jika angkana ganjil cetak "fiz" jika angkanya genap cetak "buzz" dan juka angkanya kelipatan 3 cetak "fizbuzz"
   note : optimalkan penggunaan modulo.

*/

let exp = 0
let health = 100
let fightingStyle = null

fightingStyle = "warrior"

let inventory = ['buckle', 'potion', 'tent', 'short sword', 'short bow']

//let gender = new Boolean(male)
const profile = {
    name : 'zidane',
    race : 'human',
    gender : true
}

let nilai = 1

if ( nilai === 1) {
    console.log('angkanya satu om')
} else {
    console.log('angkanya bukan satu om')
}

for (index = 1; index < 100; index++) {
    if(index/2 != 0) {
        index++
        console.log('fizz')
    } else if (index % 3 === 0){
        console.log("fizzbuzz")
    } else {
        console.log("buzz")
    }
}