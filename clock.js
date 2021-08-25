function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

class Arrow {
  #ELEMENT = null;
  #IS_UPDATING = true;
  #ANGLE = 0;
  #CLOCK = null;

  constructor(clock, element) {
    this.#CLOCK = clock;
    this.#ELEMENT = element;
    this.#ANGLE = 0;
    this.update();
    element.addEventListener("mousedown", () => {
      this.isUpdating = false;
      document.body.style.cursor = "grab";
      window.onmousemove = (cursor) => {
        const pointerX = cursor.pageX;
        const pointerY = cursor.pageY;
        const vectorNormalX = this.#CLOCK.centerX - pointerX;
        const vectorNormalY = this.#CLOCK.centerY - pointerY;
        const arct = Math.atan(vectorNormalY / vectorNormalX);
        this.angle = (vectorNormalX >= 0 ? arct : arct + Math.PI) - Math.PI / 2;
      };
      window.addEventListener("mouseup", () => {
        document.body.style.cursor = "default";
        window.onmousemove = null;
        this.isUpdating = true;
      });
    });
  }

  get isUpdating() {
    return this.#IS_UPDATING;
  }

  set isUpdating(value) {
    this.#IS_UPDATING = value;
    if (value) this.update();
  }

  get angle() {
    return this.#ANGLE;
  }

  set angle(angle) {
    this.#ANGLE = angle;
    this.#ELEMENT.style.transform = `translateY(-50%) rotate(${angle}rad)`;
  }

  get element() {
    return this.#ELEMENT;
  }

  calcDateAngle() {}

  update() {
    window.requestAnimationFrame(() => {
      this.calcDateAngle();
      if (this.#IS_UPDATING) this.update();
    });
  }
}

class SecondsArrow extends Arrow {
  constructor(clock, element) {
    super(clock, element);
  }

  calcDateAngle() {
    this.angle = deg2rad(new Date().getSeconds() * 6);
    return this.angle;
  }
}

class MinuteArrow extends Arrow {
  constructor(clock, element) {
    super(clock, element);
  }

  calcDateAngle() {
    const date = new Date();
    this.angle = deg2rad(date.getMinutes() * 6 + date.getSeconds() / 10);
    return this.angle;
  }
}

class HourArrow extends Arrow {
  constructor(clock, element) {
    super(clock, element);
  }

  calcDateAngle() {
    const date = new Date();
    const [secs, mins, hours] = [
      date.getSeconds(),
      date.getMinutes(),
      date.getHours(),
    ];
    this.angle = deg2rad(hours * 30 + mins / 2 + (secs * 30) / 3600);
    return this.angle;
  }
}

class Clock {
  #ELEMENT = null;
  constructor(element) {
    this.#ELEMENT = element;
  }

  get centerX() {
    return (
      this.#ELEMENT.getBoundingClientRect().x + this.#ELEMENT.offsetWidth / 2
    );
  }

  get centerY() {
    return (
      this.#ELEMENT.getBoundingClientRect().y + this.#ELEMENT.offsetHeight / 2
    );
  }
}

const clock = new Clock(document.querySelector(".clock"));
const hourArrow = new HourArrow(clock, document.querySelector(".hour-arrow"));
const minuteArrow = new MinuteArrow(
  clock,
  document.querySelector(".minute-arrow"),
);
const secondsArrow = new SecondsArrow(
  clock,
  document.querySelector(".seconds-arrow-selectbox"),
);
