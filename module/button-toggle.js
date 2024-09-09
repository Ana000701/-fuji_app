// category
const categoryName = document.querySelector(".category-name");
const categoryItem = document.querySelectorAll(".category-item");
const modal = document.querySelectorAll(".modal");
const body = document.querySelector("body");

categoryItem.forEach((item) => {
  item.addEventListener("click", () => {
    categoryName.innerText = item.children[1].innerText;
    categoryName.style.color = "#000";
    modal[0].classList.remove("show");
    modal[0].style.display = "none";
    const modalBackdrop = document.querySelector(".modal-backdrop");
    modalBackdrop.remove();
    body.classList.remove("modal-open");
    body.style = "";
  });
});

// partner
const partnerBtn = document.querySelector(".partner-btn");
const partnerSelectName = document.querySelector(".partner-select-name");
const partnerItem = document.querySelectorAll(".partner-item");
const partner2Item = document.querySelectorAll(".partner2-item");
const partnerName = document.querySelector(".partner-name");
const partnerImage = document.querySelector(".partner-image");

partnerItem.forEach((item) => {
  item.addEventListener("click", () => {
    partnerSelectName.innerText = item.children[1].innerText;
    partnerName.innerText = item.children[1].innerText;
    partnerImage.src = `../public/images/${partnerName.innerText}.svg`;
    modal[1].classList.remove("show");
    modal[1].style.display = "none";
    partnerBtn.style.display = "none";
    partnerCollapse.style.display = "block";
    const modalBackdrop = document.querySelector(".modal-backdrop");
    modalBackdrop.remove();
    body.classList.remove("modal-open");
    body.style = "";
  });
});

const collapseCancelBtn = document.querySelector(".collapse-cancel-button");
const partnerCollapse = document.querySelector(".partner-collapse");
collapseCancelBtn.addEventListener("click", () => {
  partnerCollapse.style.display = "none";
  partnerBtn.style.display = "block";
});
partner2Item.forEach((item) => {
  item.addEventListener("click", () => {
    partnerSelectName.innerText = item.children[1].innerText;
    partnerName.innerText = item.children[1].innerText;
    partnerImage.src = `../public/images/${partnerName.innerText}.svg`;
    modal[2].classList.remove("show");
    modal[2].style.display = "none";
    const modalBackdrop = document.querySelector(".modal-backdrop");
    modalBackdrop.remove();
    body.classList.remove("modal-open");
    body.style = "";
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
