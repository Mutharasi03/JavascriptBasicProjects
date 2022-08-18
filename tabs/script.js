const tabs = document.querySelector(".tabs");
const tabBtn = document.querySelectorAll(".tabBtn");
const cards = document.querySelectorAll(".card");

tabs.addEventListener("click", function (element) {
  const id = element.target.dataset.id;
  console.log(id);
  if (id) {
    tabBtn.forEach((btn) => {
      btn.classList.remove("active");
      element.target.classList.add("active");
    });
    cards.forEach((card) => {
        card.classList.remove("active");
      });
  }
  const elements=document.getElementById(id)
  elements.classList.add('active')
});
