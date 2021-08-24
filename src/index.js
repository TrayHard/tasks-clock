const marks = document.querySelector(".marks");

for (let i = 0; i < 60; i++) {
  const el = document.createElement("div");
  el.style.position = "absolute";
  el.style.width = "4px";
  el.style.height = "20px";
  el.style.backgroundColor = "#000";
  el.style.transformOrigin = "2px 300px 0";
  el.style.transform = `translate(0, -290px) rotate(${i * 6}deg)`;
  marks.appendChild(el);
}
