const str = 'aaaaa bb aaa bb aa ccc dd mm nn aa cccc';
const  blackList = ['aa', 'ccc']
    
   
console.log(filterBadWord(str, blackList));
// ****a bb **a bb ** *** dd mm nn ** ***c


// (10) додаємо до функції

console.log('str:', str); 
const resStr = filterBadWord(str, blackList);

console.log(resStr); 

function filterBadWord(str, arr) { 
    let resStr = str;
    
    for ( i = 0; i < arr.length; i++) {
        let word = arr[i];

        while (resStr.indexOf(word) !== -1) {
            resStr = resStr.replace(word, '*'.repeat(word.length));
        } 
    }

    return resStr;
}

    
    // (1) кількість входжень в рядку первірили 'aa'
    // console.log('subStr:', 'aa');

    // let index = 0;

    // index = str.indexOf('aa', index);
    // console.log(index);

    // index = str.indexOf('aa', index + 2);
    // console.log(index);

    // index = str.indexOf('aa', index + 2);
    // console.log(index);

    // index = str.indexOf('aa', index + 2);
    // console.log(index);

    // index = str.indexOf('aa', index + 2);
    // console.log(index);

    // index = str.indexOf('aa', index + 2);
    // console.log(index);

    // (2) кількість входжень в рядку первірили 'ccc'

    // console.log('subStr:', 'ccc');

    // let index = 0;

    // index = str.indexOf('ccc', index);
    // console.log(index);

    // index = str.indexOf('ccc', index + 2);
    // console.log(index);

    // index = str.indexOf('ccc', index + 2);
    // console.log(index);

//  (3) додаємо цикл while для index що повторювався
    // let word = blackList[0];
    // let index = 0;

    // index = str.indexOf(word, index);
    // console.log(index);

    // while (index !== -1) {
    //     index = str.indexOf(word, index + 2);
    //     console.log(index);
    // }


    //    (4) помістили наше рішення в цикл  for для проходження по масиву і замінили сталу велечину на змінну (index + 2 на index + word.length)
//    let index = 0;

//    for (i = 0; i < blackList.length; i++) {

//         let word = blackList[i];
        
//         console.log('subStr:', word);

//         index = str.indexOf(word, index);
//         console.log(index);

//         while (index !== -1) {
//             index = str.indexOf(word, index + word.length);
//             console.log(index);
//         }
//     }



//(5) знайшли першу заміну "аа" на "**", далі створюємо 
// нову змінну resStr1, resStr2 (рядок) щоб побачити чи буде замінюватися наступний елемент в рядку,
// 
    // let resStr = '';

    // console.log('str:', str);

    // let resStr = str.replace('aa', '**');
    // console.log(resStr);
    
    // let resStr1 = resStr.replace('aa', '**');
    // console.log(resStr1);

    // let resStr2 = resStr1.replace('aa', '**');
    // console.log(resStr2);


//(6) якщо ми не будемо створювати нову змінну, а будемо записувати результат в ту саму resStr
    // console.log('str:', str);
    // let resStr = str;

    // resStr = resStr.replace('aa', '**');
    // console.log(resStr);

    // resStr = resStr.replace('aa', '**');
    // console.log(resStr);

    // resStr = resStr.replace('aa', '**');
    // console.log(resStr);

    // resStr = resStr.replace('aa', '**');
    // console.log(resStr);


// (7) виникає питання скільки цих повторень нам потрібно зробити, 
// де той кінець де нам досить робити ці зміни. Нам потрібно знайти
// підстраку яку ми замінюємо в шуканому рядку(resStr) 
// якщо підстрока є ми робимо замін,у якщо підстроки нема не робимо.
// Потрібно перевіритичи є підстрока в строке, якщо нема , то навіщо нам робити перевірку   

    // let resStr = str;
    // console.log('str:', str);

    // if (resStr.indexOf('aa') !== -1) {
    //     resStr = resStr.replace('aa', '**');
    //     console.log(resStr);
    // } else {
    //     console.log(`that's all`);
    // }

    // if (resStr.indexOf('aa') !== -1) {
    //     resStr = resStr.replace('aa', '**');
    //     console.log(resStr);
    // } else {
    //     console.log(`that's all`);
    // }

    // if (resStr.indexOf('aa') !== -1) {
    //     resStr = resStr.replace('aa', '**');
    //     console.log(resStr);
    // } else {
    //     console.log(`that's all`);
    // }

    // if (resStr.indexOf('aa') !== -1) {
    //     resStr = resStr.replace('aa', '**');
    //     console.log(resStr);
    // } else {
    //     console.log(`that's all`);
    // }
    
// (8) є входження, логіка працює тому можемо зробити цикл без елсе
//До тих пір поки в рядку є підрядок виконуємо заміну підрядка на **

//     let resStr = str;
//     console.log('str:', str);

//    while (resStr.indexOf('aa') !== -1) {
//         resStr = resStr.replace('aa', '**');
//     } 
//     console.log(resStr);

// (9) робимо прив'язку до масива
// console.log('str:', str); 

// let resStr = str;
    
// for ( i = 0; i < blackList.length; i++) {
//     let word = blackList[i];

//     while (resStr.indexOf(word) !== -1) {
//         resStr = resStr.replace(word, '*'.repeat(word.length));
//     } 
// }
// console.log(resStr); 

// (11) використання методу replaceAll

// console.log('str:', str); 
// const resStr = filterBadWord(str, blackList);

// console.log(resStr); 

// function filterBadWord(str, arr) { 
//     let resStr = str;
    
//     for ( i = 0; i < arr.length; i++) {
//         let word = arr[i];
//         resStr = replaceAll(resStr, word);
//     }

//     return resStr;
// }

// function replaceAll(str, subStr) {
//     while (str.indexOf(subStr) !== -1) {
//         str = str.replace(subStr, '*'.repeat(subStr.length));
//     } 
//     return str;
// }


// регулярні вирази
    // console.log(filterBadWord2(str, blackList));
    // console.log(filterBadWord3(str, blackList));

    // function filterBadWord(str, arr) {

    //     let newStr = str.replace(/aa/g, '**');

    //     return newStr;
    // }

    // function filterBadWord2(str) {

    //     let newStr1 = str.replace(/ccc/g, '***');

    //     return newStr1;
    // }

    // function filterBadWord3(strr) {
        
    //     let newStr2 = str.replace(/[ac]/g, '*');

    //     return newStr2;
    // }