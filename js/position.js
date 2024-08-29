// 頁面滾動 function
function scrollToPosition(link) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1); // 第 1 個字符（索引 1）開始提取子字符串，去掉 #，只返回 section1。
    const targetElement = document.getElementById(targetId);
    const navHeight = document.querySelector(".nav").offsetHeight;
    const targetPosition =
      targetElement.getBoundingClientRect().top +
      window.pageYOffset -
      navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
}

const aboutLink = document.querySelector("#aboutLink");
const portfolioLink = document.querySelector("#portfolioLink");
const contactLink = document.querySelector("#contactLink");
const contactBtnLink = document.querySelector("#contactBtnLink");

scrollToPosition(aboutLink);
scrollToPosition(portfolioLink);
scrollToPosition(contactLink);
scrollToPosition(contactBtnLink);