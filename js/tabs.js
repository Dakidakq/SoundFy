const tabs = [...document.querySelectorAll(".tabs")];
const contents = [...document.querySelectorAll(".content")];

tabs.forEach((tab) => tab.addEventListener("click", handleTabs))

let index = 0;
function handleTabs(e){
  const currentEL = e.target;

  tabs[index].classList.remove("active");
  contents[index].classList.remove("active-content")

  index = tabs.indexOf(currentEL);

  tabs[index].classList.add("active");
  contents[index].classList.add("active-content")
}