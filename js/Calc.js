var str;
var endStr;
function OnClickClear () {
    str = document.getElementById("output");
    str.value="";
}
function OnClickNumber (num) {
    str = document.getElementById("output");
    str.value = str.value + num;
}
function OnclickCalculate () {
    str = document.getElementById("output");
    str.value=eval(str.value);
}