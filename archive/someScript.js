
            const app = document.getElementById('app');
        const litersInput = document.getElementById('liters');
        const ratioInput = document.getElementById('ratio');
        const calculateBtn = document.getElementById('submitCalculation');
        const returnBtn = document.createElement('button');
        returnBtn.innerText = "Return";


// Keep track of whether the result is displayed
let resultDisplayed = false;

function calculateMix() {
    if (!resultDisplayed) {
        const liters = parseInt(litersInput.value);
        const milliLiters = liters * 1000;
        const ratio = 1 / parseInt(ratioInput.value);
        const result = milliLiters * ratio;
        const resultHtml = `<p>${result} Milliliters of oil for ${liters} liters of gas at a ratio of ${ratioInput.value}:1.</p><br>`;
        app.innerHTML = resultHtml;
        app.appendChild(returnBtn);
        resultDisplayed = true;
    }
}

function returnToCalc() {
    const calculatorHtml = `
        <label for="liters" style="margin-bottom: -15px;">Liters</label><br>
        <input type="number" name="liters" id="liters"><br>
        <label for="ratio" style="margin-bottom: -15px;">Ratio</label><br>
        <div class="ratio">
            <input type="number" name="ratio" id="ratio"><span>:1</span>
        </div><br>
        <button type="submit" id="submitCalculation">Calculate</button>`;
    app.innerHTML = calculatorHtml;
    resultDisplayed = false; // Reset the flag here
}
resultDisplayed = false; // Reset the flag here

app.addEventListener('click', function(event) {
    if (event.target.id === 'submitCalculation') {
        calculateMix();
    } else if (event.target === returnBtn) {
        returnToCalc();
    }
});

        