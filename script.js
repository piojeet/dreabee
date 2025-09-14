// ========= Tabs ============
const tabButtons = document.querySelectorAll(".feature_button");
const tabContents = document.querySelectorAll(".tab_content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(tc => tc.classList.remove("active"));


    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// ========== Accordion ===========
const accordions = document.querySelectorAll(".feature_item");

accordions.forEach(item => {
  const toggle = item.querySelector(".feature_item_toggle");

  toggle.addEventListener("click", () => {
    item.classList.toggle("open"); 
  });
});


function navMenu() {
  const navCloseBtn = document.querySelector(".nav_close-btn"); 
  const navMenuBtn = document.querySelector(".nav_menu-btn");   
  const navMenu = document.querySelector(".navbar_links");            

  if (!navMenu || !navMenuBtn || !navCloseBtn) return;

 
  navMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.add("active");
  });

  navCloseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !navMenuBtn.contains(e.target)
    ) {
      navMenu.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", navMenu);
