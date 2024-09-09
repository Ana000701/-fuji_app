// category
const categoryName = document.querySelector(".category-name");
const categoryItem = document.querySelectorAll(".category-item");
const modal = document.querySelectorAll(".modal");

categoryItem.forEach((item) => {
  item.addEventListener("click", () => {
    categoryName.innerText = item.children[1].innerText;
    categoryName.style.color = "#000";
    modal[0].classList.remove("show");
    modal[0].style.display = "none";
    const modalBackdrop = document.querySelector(".modal-backdrop");
    modalBackdrop.remove();
  });
});

// partner
const partnerSelectMame = document.querySelector(".partner-select-name");
const partnerItem = document.querySelectorAll(".partner-item");
const partnerName = document.querySelector(".partner-name");
const partnerImage = document.querySelector(".partner-image");
console.log(partnerName);
console.log(partnerItem[0].innerText);
console.log(partnerImage.src);

partnerItem.forEach((item) => {
  item.addEventListener("click", () => {
    partnerSelectMame.innerText = item.children[1].innerText;
    partnerName.innerText = item.children[1].innerText;
    partnerImage.src = `../public/images/${partnerName.innerText}.svg`;
    modal[1].classList.remove("show");
    modal[1].style.display = "none";
    const modalBackdrop = document.querySelector(".modal-backdrop");
    modalBackdrop.remove();
  });
});

// 重複扣款、自動還款提醒展開效果
const repeatPaymentBtn = document.querySelector("#repeat-payment-btn");
const repeatPayment = document.querySelector(".repeat-payment");

const repaymentReminderBtn = document.querySelector("#repayment-reminder-btn");
const repaymentReminder = document.querySelector(".repayment-reminder");

const handle = document.querySelector(".handle");
const handle2 = document.querySelector(".handle2");

repeatPaymentBtn.addEventListener("click", () => {
  repeatPaymentBtn.classList.toggle("openStyle");
  repeatPayment.classList.toggle("showStyle");
  handle.classList.toggle("move");
});

repaymentReminderBtn.addEventListener("click", () => {
  repaymentReminderBtn.classList.toggle("openStyle");
  repaymentReminder.classList.toggle("showStyle");
  handle2.classList.toggle("move");
});
