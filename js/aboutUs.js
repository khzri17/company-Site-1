// counters
const counters = document.querySelectorAll(".circle h2");
console.log(counters);
counters.forEach((counter) => {
  counter.innerHTML = "0";
  let updateCounter = () => {
    let target = +counter.getAttribute("data-target");
    let c = +counter.innerHTML;
    let increment = target / 100
    if (c < target) {
      counter.innerHTML = Math.round(c + increment);
      setTimeout(updateCounter , 1)
    }else{
        counter.innerHTML = target;
    }
  };
  updateCounter()
});

// End counters
// customer
let images = document.querySelector(".customer-img").children;
let customers = document.querySelector(".customers").children;
let totalCustomers = customers.length;
let totalImages = images.length;
for (let i = 0; i < totalImages; i++) {
  images[i].addEventListener("click", () => {
    for (let x = 0; x < totalImages; x++) {
      images[x].classList.remove("active");
    }
    for (let y = 0; y < totalCustomers; y++) {
      customers[y].classList.remove("active");
    }
    customers[i].classList.add("active");
    images[i].classList.add("active");
  });
}
// end customer