import "./style.css";
import { intervalMinus, intervalPlus, timerReset, timerStart, timerStop } from "./timer";

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const intervalInc = document.querySelector(".intervalInc");
const intervalDec = document.querySelector(".intervalDec");

startBtn.addEventListener("click", timerStart);
stopBtn.addEventListener("click", timerStop);
reset.addEventListener("click", timerReset);
intervalInc.addEventListener("click", intervalPlus);
intervalDec.addEventListener("click", intervalMinus);