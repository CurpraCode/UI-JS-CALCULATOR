const outputNumber = document.getElementById("display");

function calcFun(num) {
  outputNumber.value = outputNumber.value + num;
}

function clearFun() {
  outputNumber.value = "";
}
function singleClear() {
  outputNumber.value = outputNumber.value.substring(
    0,
    outputNumber.value.length - 1
  );
}

function sumUp() {
  outputNumber.value = eval(outputNumber.value);
}
