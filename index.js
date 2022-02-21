console.log("hello, vanilla.");

const startBtn = document.querySelector(".startButton");
const enterBtn = document.querySelector(".enterButton");

startBtn.addEventListener("click", function () {
  console.log("Let's Start!");
  document.querySelector(".startButton").style.visibility = "hidden";
  return MakeNumber();
});

enterBtn.addEventListener("click", function () {
  const num1 = document.getElementById("firstNum").value;
  const num2 = document.getElementById("secondNum").value;
  const num3 = document.getElementById("thridNum").value;
  const userNumber = [Number(num1), Number(num2), Number(num3)];
  console.log(userNumber);

  if (num1 === "" || num2 === "" || num3 === "") {
    alert("비었습니다.");
  } else if (
    Number.isNaN(Number(num1)) ||
    Number.isNaN(Number(num2)) ||
    Number.isNaN(Number(num3))
  ) {
    alert("숫자를 입력하세요.");
  } else if (CheckOverlap(userNumber)) {
    alert("숫자는 중복되면 안됩니다.");
  }
});

// 시작 변수
function MakeNumber() {
  const answerNumber = [];
  for (i = 0; i < 3; i++) {
    answerNumber.push(Math.floor(Math.random() * 10));
    // console.log(answerNumber);

    if (i > 0) {
      for (j = 0; j <= i - 1; j++) {
        if (answerNumber[j] === answerNumber[i]) {
          answerNumber.pop();
          i--;
          break;
        }
      }
    }
  }
  return answerNumber;
}

// 중복 검사
function CheckOverlap(idx) {
  setIdx = new Set(idx);
  if (setIdx.size < idx.length) {
    return true;
  }
}

// 입력값 초기화
function UserDataClear(idx) {}

// function userInput() {
//   const num1 = document.getElementById("firstNum").value;
//   const num2 = document.getElementById("secondNum").value;
//   const num3 = document.getElementById("thridNum").value;
//   const userNumber = [num1, num2, num3];

//   if (typeof num1 && typeof num2 && typeof num3 !== "number") {
//     alert("숫자를 입력해주세요.");
//   } else if (userNumber.length < 3) {
//     alert("모든 숫자를 입력해주세요.");
//   }
// }
