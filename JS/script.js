$(".selector").flatpickr(optional_config);
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
/*
var d1 = Date.getTime(),
    d2 = 
    */
$(function() {
    $("#sDate").datepicker();
    var Enter = $("#sDate")
});
$(function() {
    $("#eDate").datepicker();
    var leave = $("#eDate")
});

function func() {
    sDate = new Date(date1.value);
    eDate = new Date(date2.value);
    var milli_secs = sDate.getTime() - eDate.getTime();

    // Convert the milli seconds to Days 
    var days = Math.round(Math.abs(milli_secs / (1000 * 3600 * 24)));
    console.log(days)
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