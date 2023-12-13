document.addEventListener("DOMContentLoaded", () => {
    const tradeForm = document.getElementById("trade-form");
    const tradeTable = document.getElementById("trade-table");

    const loadTrades = () => {
        const trades = JSON.parse(localStorage.getItem("trades")) || [];
        trades.forEach(trade => addTradeToTable(trade));
    };

    const addTradeToTable = trade => {
        const row = document.createElement("tr");
        Object.values(trade).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        tradeTable.querySelector("tbody").appendChild(row);
    };

    const saveTrade = trade => {
        const trades = JSON.parse(localStorage.getItem("trades")) || [];
        trades.push(trade);
        localStorage.setItem("trades", JSON.stringify(trades));
    };

    tradeForm.addEventListener("submit", event => {
        event.preventDefault();

        const date = tradeForm.querySelector("#date").value;
        const entryPrice = tradeForm.querySelector("#entry-price").value;
        const exitPrice = tradeForm.querySelector("#exit-price").value;
        const positionSize = tradeForm.querySelector("#position-size").value;
        const pnl = (((parseFloat(exitPrice) - parseFloat(entryPrice)) / parseFloat(entryPrice)) * 100).toFixed(2);

        const trade = {
            date,
            entryPrice,
            exitPrice,
            positionSize,
            pnl
        };

        addTradeToTable(trade);
        saveTrade(trade);

        tradeForm.reset();
    });

    loadTrades();
});