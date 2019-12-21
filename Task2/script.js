//'use strict'


let money = +prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD?");

let appData ={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
}

// let a1 = prompt("Введите обязательную статью расходов в этом месяце");
// let b1 = +prompt("Во сколько обойдется?");
// let a2 = prompt("Введите обязательную статью расходов в этом месяце")//let b2 = prompt("Во сколько обойдется?");
// let b2 = +prompt("Во сколько обойдется?");

// appData.expenses[a1]=b1;
// appData.expenses[a2]=b2;



// let i=0;
// while (i<2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = +prompt("Во сколько обойдется?", "");
//     if(typeof(a)==='string'&& (typeof(a) !=null)&&(typeof(b) !=null)&& a !='' && b !='' && a.length<50) {
    
//         console.log('Done');
//         appData.expenses[a]=b;
    
//         i++;
//     }
// }
let i=0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = +prompt("Во сколько обойдется?", "");
    if(typeof(a)==='string'&& (typeof(a) !=null)&&(typeof(b) !=null)&& a !='' && b !='' && a.length<50) {
    
        console.log('Done');
        appData.expenses[a]=b;
    i++;
    }
}
while (i < 2);

/*for (let i=0; i<2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = +prompt("Во сколько обойдется?", "");
 

    if(typeof(a)==='string'&& (typeof(a) !=null)&&(typeof(b) !=null)&& a !='' && b !='' && a.length<50) {
    
        console.log('Done');
        appData.expenses[a]=b;
    } else {i--;}

    
};
*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay<100) {
    console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay<2000) {
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay>2000) {
    console.log("Высокий уровень достатка");
} else {
      console.log("Произошла ошибка");
  
}
 
console.log(appData);