const marks = document.querySelector(".marks");

for (let i = 0; i < 60; i++) {
  if (i % 5 == 0) continue;
  const el = document.createElement("div");
  el.style.position = "absolute";
  el.style.width = "4px";
  el.style.height = "20px";
  el.style.backgroundColor = "#eee";
  el.style.transformOrigin = "2px 300px 0";
  el.style.transform = `translate(0, -290px) rotate(${i * 6}deg)`;
  marks.appendChild(el);
}

for (let i = 0; i < 12; i++) {
  const label = document.querySelector(`.label-${i + 1}`);
  label.style.transform = `translate(0, -240px) rotate(${30 * (i + 1)}deg)`;
  label.style.transformOrigin = "0 240px 0";
  label.querySelector(".number").style.transform = `rotate(-${30 * (i + 1)}deg)`;
}
