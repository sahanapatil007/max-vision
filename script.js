
const menBtn = document.getElementById("menBtn");
const womenBtn = document.getElementById("womenBtn");


const men = document.getElementById("men");
const women = document.getElementById("women");

function showSection(section) {
  gsap.to(men, { left: "110%", duration: 0.5 });
  gsap.to(women, { left: "110%", duration: 0.5 });
  gsap.to(section, { left: "0%", duration: 0.5 });
}

menBtn.addEventListener("click", () => showSection(men));
womenBtn.addEventListener("click", () => showSection(women));



gsap.to('#img1',{
  y:-10,
  duration:4,
  ease:"power2.out"
});

gsap.to('#img2',{
  y:10,
  duration:4,
  ease:"power2.out"
});

gsap.to('#img3',{
  y:-10,
  duration:4,
  ease:"power2.out"
});