// category
const categoryName = document.querySelector(".category-name");
const categoryItem = document.querySelectorAll(".category-item");

categoryItem.forEach((item) => {
  item.addEventListener("click", () => {
    categoryName.innerText = item.children[1].innerText;
    categoryName.style.color = "#000";
  });
});

// partner
const partnerBtn = document.querySelector(".partner-btn");
const partnerSelectName = document.querySelectorAll(".partner-select-name");
const partnerItem = document.querySelectorAll(".partner-item");
const partner2Item = document.querySelectorAll(".partner2-item");
const partnerName = document.querySelector(".partner-name");
const partnerImage = document.querySelector(".partner-image");
const submitBtn = document.querySelector(".submit-btn");
const submit = document.querySelector(".submit");
// 第一次選取共同支付者
partnerItem.forEach((item) => {
  item.addEventListener("click", () => {
    partnerSelectName[0].innerText = item.children[1].innerText;
    partnerSelectName[1].innerText = item.children[1].innerText;
    partnerName.innerText = item.children[1].innerText;
    partnerImage.src = `../public/images/${partnerName.innerText}.svg`;
    partnerCollapse.style.display = "block";
    partnerBtn.style.display = "none";
    submitBtn.style.color = "white";
    submitBtn.style.backgroundColor = "#EC9427";
    submit.action = "finished.html";
  });
});
// 修改共同支付者
partner2Item.forEach((item) => {
  item.addEventListener("click", () => {
    partnerSelectName[0].innerText = item.children[1].innerText;
    partnerSelectName[1].innerText = item.children[1].innerText;
    partnerName.innerText = item.children[1].innerText;
    partnerImage.src = `../public/images/${partnerName.innerText}.svg`;
  });
});

// 關閉共同支付者視窗
const collapseCancelBtn = document.querySelector(".collapse-cancel-button");
const partnerCollapse = document.querySelector(".partner-collapse");
collapseCancelBtn.addEventListener("click", () => {
  partnerCollapse.style.display = "none";
  partnerBtn.style.display = "block";
  submitBtn.style.color = "#98A2B3";
  submitBtn.style.backgroundColor = "#E4E7EC";
  submit.action = "";
});
// 輸入金額
const price = document.querySelector("#price");
const apportionmentMoney = document.querySelectorAll(".apportionment-money");
// 監聽輸入事件，每當使用者輸入完畢就觸發格式化
price.addEventListener("input", function () {
  // 取得輸入的值，並轉換為數字
  const inputValue = Number(this.value.replace(/\D/g, ""));

  // 格式化為每三位加一個逗號
  const formattedValue = inputValue.toLocaleString();

  // 將格式化後的數值回填至 input
  this.value = formattedValue;

  const divide2 = Number(this.value.replace(/,/g, "")) / 2;
  apportionmentMoney[0].value = divide2.toLocaleString();
  apportionmentMoney[1].value = divide2.toLocaleString();
});

// 修改分攤方式
const apportionmentItem = document.querySelectorAll(".apportionment-item");
const apportionmentSelectName = document.querySelector(
  ".apportionment-select-name"
);
const unit = document.querySelectorAll(".unit");
// 修改分攤金額與單位
apportionmentItem.forEach((item) => {
  item.addEventListener("click", () => {
    apportionmentSelectName.innerText = item.children[0].innerText;

    if (apportionmentSelectName.innerText == "平均分攤") {
      apportionmentMoney[0].value = (
        Number(price.value.replace(/,/g, "")) / 2
      ).toLocaleString();
      apportionmentMoney[1].value = (
        Number(price.value.replace(/,/g, "")) / 2
      ).toLocaleString();
      unit[0].innerText = "元";
      unit[1].innerText = "元";
      apportionmentMoney.forEach((item) => {
        item.setAttribute("disabled", "disabled");
      });
    } else if (apportionmentSelectName.innerText == "自訂比例") {
      apportionmentMoney.forEach((item) => {
        item.removeAttribute("disabled");
      });
      apportionmentMoney[0].value = 80;
      apportionmentMoney[1].value = 20;
      unit[0].innerText = "%";
      unit[1].innerText = "%";
    } else if (apportionmentSelectName.innerText == "自訂金額") {
      apportionmentMoney.forEach((item) => {
        item.removeAttribute("disabled");
      });
      apportionmentMoney[0].value = price.value;
      apportionmentMoney[1].value = 0;
      unit[0].innerText = "元";
      unit[1].innerText = "元";
    }
  });
});

// 格式化為每三位加一個逗號
apportionmentMoney[0].addEventListener("input", function () {
  const inputValue = Number(this.value.replace(/\D/g, ""));

  const formattedValue = inputValue.toLocaleString();

  this.value = formattedValue;
});
apportionmentMoney[1].addEventListener("input", function () {
  const inputValue = Number(this.value.replace(/\D/g, ""));

  const formattedValue = inputValue.toLocaleString();

  this.value = formattedValue;
});

// switch展開效果
const repeatPaymentBtn = document.querySelector("#repeat-payment-btn");
const repeatPayment = document.querySelector(".repeat-payment");
const repaymentReminderBtn = document.querySelector("#repayment-reminder-btn");
const repaymentReminder = document.querySelector(".repayment-reminder");
const handle = document.querySelector(".handle");
const handle2 = document.querySelector(".handle2");

// 重複扣款
repeatPaymentBtn.addEventListener("click", () => {
  repeatPaymentBtn.classList.toggle("openStyle");
  repeatPayment.classList.toggle("showStyle");
  handle.classList.toggle("move");
});

// 自動還款提醒
repaymentReminderBtn.addEventListener("click", () => {
  repaymentReminderBtn.classList.toggle("openStyle");
  repaymentReminder.classList.toggle("showStyle");
  handle2.classList.toggle("move");
});

// repeat payment frequency
const frequencyItem = document.querySelectorAll(".frequency-item");
const frequencySelectName = document.querySelector(".frequency-select-name");
frequencyItem.forEach((item) => {
  item.addEventListener("click", () => {
    frequencySelectName.innerText = item.children[0].innerText;
  });
});

// repayment reminder frequency
const frequency2Item = document.querySelectorAll(".frequency2-item");
const frequency2SelectName = document.querySelector(".frequency2-select-name");
frequency2Item.forEach((item) => {
  item.addEventListener("click", () => {
    frequency2SelectName.innerText = item.children[0].innerText;
  });
});

// 心情人物
const characterItem = document.querySelectorAll(".character-item");
const characterSelectName = document.querySelector(".character-select-name");
const messageImage = document.querySelector(".message-image");
characterItem.forEach((item) => {
  item.addEventListener("click", () => {
    characterSelectName.innerText = item.children[0].innerText;
    messageImage.src = `../public/images/${item.children[1].alt}.svg`;
  });
});

// 費用名稱
const name = document.querySelector("#name");
const billName = document.querySelector(".bill-name");
name.addEventListener("input", function () {
  billName.innerText = this.value;
});

// 留言內容
const message = document.querySelector("#message");
const messageResult = document.querySelector(".message-input");
message.addEventListener("input", function () {
  messageResult.innerText = this.value;
});
