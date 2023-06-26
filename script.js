window.promises = [];
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise1 fulfilled");
  }, 2000);
});
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise2 fulfilled");
  }, 1000);
});
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise3 fulfilled");
  }, 5000);
});
const promise4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise4 fulfilled");
  }, 4000);
});
const promise5 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise5 fulfilled");
  }, 3000);
});
window.promises.push(promise1, promise2, promise3, promise4, promise5);
// Do not change the code above this
// add your promises to the array `promises`
Promise.any(promises).then((value) => {
	let idElement=document.getElementById("output");
	idElement.innerHTML=value;
});
