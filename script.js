"use strict";


// (1)
var now = new Date();
var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
var diff = tomorrow - now;
var date = Math.floor(diff / 1000 / 60);
console.log(date);


// (2)
var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var diff = now - today;
var date2 = Math.floor(diff / 1000);
console.log(date2);


// (3)
var date3 = new Date(2013, 0, 25);
console.log(date3);


// (4)























