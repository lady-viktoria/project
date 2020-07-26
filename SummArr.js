'use strict';

const arr = [1,2,'33',9,2,'sdfghjkl'];

function summArr (arr) {
    let sum = 0;
if (Array.isArray(arr)){
    arr.forEach (function (item, i, arr){
        if (typeof(item)==='number') {
            sum=item+sum;
        }
    });    
    console.log(sum); 
}
};

summArr(5, 'fghjk');

