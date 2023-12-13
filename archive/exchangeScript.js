const exchangeForm = document.getElementById("exchange-form");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const fromAmount = document.getElementById("fromAmount");
const exchangeRate = document.getElementById("exchange-rate");
const result = document.getElementById("result");

exchangeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    performExchange();
});

async function performExchange() {
    try {
        const response = await fetch(`https://api.example.com/exchange?from=${fromCurrency.value}&to=${toCurrency.value}`);
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rate');
        }

        const data = await response.json();
        const rate = data.rate;

        const calculatedResult = fromAmount.value * rate;
        exchangeRate.textContent = `1 ${fromCurrency.value} = ${rate} ${toCurrency.value}`;
        result.textContent = `${fromAmount.value} ${fromCurrency.value} = ${calculatedResult.toFixed(2)} ${toCurrency.value}`;
    } catch (error) {
        console.error(error);
        alert('Error occurred while fetching exchange rate. Please try again later.');
    }
}