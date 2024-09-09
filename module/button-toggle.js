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
