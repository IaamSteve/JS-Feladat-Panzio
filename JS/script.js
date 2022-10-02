/*
import './flatpickr'
import $ from 'jquery'
*/
/*
let perfo = $('#vendegek'),
    sDate = $('#start'),
    eDate = $('#stop'),
    szoba1 = $('#Szoba1'),
    szoba2 = $('#Szoba2'),
    szoba3 = $('#Szoba3'),
    szoba4 = $('#Szoba4'),
    furdo1 = $('#Furdo1'),
    furdo2 = $('#Furdo2'),
    furdo3 = $('#Furdo3'),
    furdo4 = $('#Furdo4'),
    egyeb = $('#Egyeb');
*/ //Failed Jquery
let d1;
let d2;
document.getElementById("date1").addEventListener("change", getDate);
document.getElementById("date2").addEventListener("change", getDate1);
function getDate() {
  d1 = document.getElementById("date1");
  console.log(d1.value);
}
function getDate1() {
  d2 = document.getElementById("date2");
  console.log(d2.value);
}
function DiffOfTime(){
    const diffTime = Math.abs(d2.value - d1.value);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime.toString() + " milliseconds");
    console.log(diffDays.toString() + " days");
    
}

/*
function dateDiff(d1, d2) {
  var datediff = d1.value - d2.value; //store the getTime diff - or +
  return datediff / (24 * 60 * 60 * 1000); //Convert values to -/+ days and return value
}

/*
var d1 = new Date(); //az aktuális dátum
var d2 = new Date("2013/11/01"); //a múltbéli dátum
var diff = Math.abs(d1 - d2); //a különbség(ms)
document.write(Math.round(diff / 1000 / 60 / 60 / 24 / 31)); //az eredmény

function szokoev(ev) {
    let nap = 0;
    if ((ev % 4 == 0) && (ev % 100 != 0) || (ev % 400 == 0)) {
        nap = 1;
    }
    return nap;
}
*/
