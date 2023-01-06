const timer = document.querySelector(".timer");
const shower = document.querySelector(".shower");

let timerValue = 0;
timer.textContent = timerValue;
let showerValue = 0;
shower.textContent = showerValue + " in a sec";

let intervalStart = null;

export const timerStart = () => {
    if (!intervalStart) {
        if (!showerValue) showerValue += 1;
        shower.textContent = showerValue + " in a sec";
        intervalStart = setInterval(() => {
            timer.textContent = timerValue += 1;
        }, ((1 / showerValue) * 1000));
    }
};

export const timerStop = () => {
    clearInterval(intervalStart);
    intervalStart = null;
};

export const timerReset = () => {
    showerValue = 0;
    shower.textContent = showerValue + " in a sec"
    clearInterval(intervalStart);
    intervalStart = null;
    timerValue = 0;
    timer.textContent = timerValue;
};

export const intervalPlus = () => {
    showerValue += 1;
    shower.textContent = showerValue + " in a sec";
    clearInterval(intervalStart);
    intervalStart = null;
    timerStart();
};

export const intervalMinus = () => {
    if (showerValue > 0) {
        showerValue -= 1;
        shower.textContent = showerValue + " in a sec";
        clearInterval(intervalStart);
        intervalStart = null;
        if (showerValue == 0) return;
        timerStart();
    }
};