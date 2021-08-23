const marks = document.querySelector('.marks')

for (let i = 0; i < 60; i++) {
  const el = document.createElement('div')
  el.style.position = 'absolute';
  el.style.width = '4px';
  el.style.height = '20px';
  el.style.backgroundColor = '#000';
  el.style.transformOrigin = '2px 300px 0';
  el.style.transform = `translate(0, -290px) rotate(${i * 6}deg)`;
  marks.appendChild(el);
}

const hourArrow = document.querySelector(".hour-arrow");
const minuteArrow = document.querySelector(".minute-arrow");
const secondArrow = document.querySelector(".second-arrow");

const step = () => {
  const date = new Date();
  const [secs, mins, hours] = [
    date.getSeconds(),
    date.getMinutes(),
    date.getHours(),
  ];
  let secondAngle = secs * 6;
  let minuteAngle = (mins * 6) + (secs / 10);
  let hourAngle = (hours * 30) + (mins / 2) + (secs * 30 / 3600)

  secondArrow.style.transform = `translateY(-50%) rotate(${secondAngle}deg)`;
  minuteArrow.style.transform = `translateY(-50%) rotate(${minuteAngle}deg)`;
  hourArrow.style.transform = `translateY(-50%) rotate(${hourAngle}deg)`;
  window.requestAnimationFrame(step);
};

window.requestAnimationFrame(step);
