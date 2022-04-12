fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => displayAdvice(data));

function displayAdvice(data) {
    const advData = data.slip;
    const adviceDiv = document.getElementById("Advice");
    const advice = advData.advice;
    adviceDiv.innerHTML = advice;

    const adviceNumber = document.getElementById("adviceNumber");
    const num = advData.id;
    adviceNumber.innerHTML = num;
};

function refreshPage() {
    location.reload();
}

  