// SETUP-1
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const three = document.querySelector(".EQUAL");
const btn = document.querySelector(".btn");
// SETUP-2
text1.addEventListener("input", () => console.log(text1.value));
text2.addEventListener("input", () => console.log(text2.value));
btn.addEventListener("click", myCalc);
// SETUP-3
function myCalc() {
    three.value = (+text1.value / +text2.value);
};