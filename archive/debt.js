
// Incoming
const monthlyIncome = {
    eesa: 259 * 2,
    pip: 272,
    uc: 110
  };
  
  // Priority debt
  const priorityDebt = {
    pcns: 55,
    m140iBalance: 13500,
    m140iArrears: 3500,
  };
  
  const nonPriorityDebt = {
    creditSecurity: 1579,
    ee: 578,
    capitalResolve: 50,
    lowell: 237,
    capitalOne: 376,
    moorcroft: 975,
    monzo: () => {
      const balances = {
        overdraft: 1000,
        loan: 2657,
        flex: 2080,
      };
      const sumOfMonzoDebt = Object.values(balances).reduce((sum, value) => sum + value, 0);
  
      return sumOfMonzoDebt;
    },
  };
  
  const monthlySpending = {
    rent: 100,
    smoking: 300,
    transport: 30,
    appleSubscriptions: 25,
    coinbaseOne: 20
  };
  
  const debtRepaymentFigures = {
    creditSecurity: 5,
    ee: 80,
    capitalResolve: 10,
    lowell: 10,
    capitalOne: 27,
    moorcroft: 32,
    monzo: 0,
  }
  
  //let currentDate = new Date();
  
  function repayment(obj, key, amount, date/* = currentDate*/) {
    if (obj.hasOwnProperty(key)) {
      obj[key] -= amount;
      console.log(`[${date}] Paid ${key} to the sum of £${amount}`);
      console.log(`New ${key} balance is £${obj[key]}`);
    } 
  }

  let initialDebt = Object.values(priorityDebt).reduce((sum, value) => sum + value, 0) +  Object.values(nonPriorityDebt).reduce((sum, value) => {
    // Check if the value is a function and if so, invoke it
    if (typeof value === 'function') {
      return sum + value();
    }
    return sum + value;
  }, 0);

function novemberRepayments() {
    repayment(priorityDebt, 'pcns', 5, "12/12/23")
    repayment(nonPriorityDebt, 'ee', 80, "12/12/23")
    repayment(nonPriorityDebt, 'creditSecurity', 5, "12/12/23")
    repayment(nonPriorityDebt, 'lowell', 0, "12/12/23")
    repayment(nonPriorityDebt, 'capitalOne', 27, "12/12/23")
    repayment(nonPriorityDebt, 'moorcroft', 9.77, "12/12/23")
}
//novemberRepayments()

    //let debt = initialDebt;

    //debt -= novemberRepayments()
  
  function decemberRepayments() {
    repayment(priorityDebt, 'pcns', 5, "12/12/23")
    repayment(nonPriorityDebt, 'ee', 80, "12/12/23")
    repayment(nonPriorityDebt, 'creditSecurity', 8.05, "12/12/23")
    repayment(nonPriorityDebt, 'lowell', 10, "12/12/23")
    repayment(nonPriorityDebt, 'capitalOne', 27, "12/12/23")
    repayment(nonPriorityDebt, 'moorcroft', 10, "12/12/23")
  }
  decemberRepayments()
  
  
  
  
  
  
  
  
  
  const calcSumOfPriorityDebt = () => {
    const sumOfPriorityDebt = Object.values(priorityDebt).reduce((sum, value) => sum + value, 0)
    
    return sumOfPriorityDebt;
  };
  
  const calcSumOfNonPriorityDebt = () => {
    const sumOfNonPriorityDebt = Object.values(nonPriorityDebt).reduce((sum, value) => {
      // Check if the value is a function and if so, invoke it
      if (typeof value === 'function') {
        return sum + value();
      }
      return sum + value;
    }, 0);
  
    return sumOfNonPriorityDebt;
  };
  
  const calcMonthlySpending = () => {
    const spending = Object.values(monthlySpending).reduce((sum, value) => sum + value, 0)
    
    return spending;
  };
  
  const calcMonthlyIncome = () => {
    const income = Object.values(monthlyIncome).reduce((sum, value) => sum + value, 0)
    
    return income;
  };
  
  const calcSumOfMonthlyDebtRepayments = () => {
    const repayment = Object.values(debtRepaymentFigures).reduce((sum, value) => sum + value, 0);
    
    return repayment
  }
  
  
  
  
  
  const sumOfPriorityDebts = calcSumOfPriorityDebt()
  const sumOfNonPriorityDebts = calcSumOfNonPriorityDebt()
  
  const sumOfMySpending = calcMonthlySpending()
  const sumOfMyIncome = calcMonthlyIncome()
  
  let totalDebt = sumOfPriorityDebts + sumOfNonPriorityDebts;
  
  const monthlyDebtRepayments = calcSumOfMonthlyDebtRepayments();
  
  let deductions = monthlyDebtRepayments + sumOfMySpending
  
  let grossIncome = sumOfMyIncome;
  let disposableIncome = grossIncome - deductions;
  
  const repaymentDurationNonPriority = sumOfNonPriorityDebts / disposableIncome;
  let repaymentDurationFormattedNonPriority = Math.floor(repaymentDurationNonPriority) + " months"
  const repaymentDurationNonPriorityFloor = Math.floor(sumOfNonPriorityDebts / disposableIncome);
  
  const repaymentDurationPriority = sumOfPriorityDebts / disposableIncome;
  let repaymentDurationFormattedPriority = Math.floor(repaymentDurationPriority) + " months"
  const repaymentDurationPriorityFloor = Math.floor(sumOfPriorityDebts / disposableIncome);
  
  const repaymentDurationTotalDebt = totalDebt / disposableIncome;
  let repaymentDurationFormattedTotalDebt = Math.floor(repaymentDurationTotalDebt) + " months"
  const repaymentDurationTotalDebtFloor = Math.floor(totalDebt / disposableIncome);
  
  function displayAdvice() {
  console.log(`Non-priority debt ~ £${sumOfNonPriorityDebts} ~ ${repaymentDurationFormattedNonPriority} ~ [${sumOfNonPriorityDebts} / ${disposableIncome} ~ ${repaymentDurationNonPriorityFloor}].`)
  console.log(`Priority debt ~ £${sumOfPriorityDebts} ~ ${repaymentDurationFormattedPriority} ~ [${sumOfPriorityDebts} / ${disposableIncome} ~ ${repaymentDurationPriorityFloor}].`)
  console.log(`Total debt ~ £${totalDebt} = ${repaymentDurationFormattedTotalDebt} ~ [${totalDebt} / ${disposableIncome} ~ ${repaymentDurationTotalDebtFloor}].`);
  };
  
  function displayStats() {
    console.log('Total debt:', totalDebt)
    console.log('Gross monthly income:', grossIncome);
    console.log('Monthly general spending:', sumOfMySpending)
    console.log('Monthly debt repaymments', monthlyDebtRepayments)
    console.log('Net monthly income:', disposableIncome)
    console.log()
    console.log('Non-priority debt:', sumOfNonPriorityDebts)
    console.log('Priority debt:', sumOfPriorityDebts)
  }
  
  
  
  function displayBalances() {
    console.log(priorityDebt)
    console.log(nonPriorityDebt)
  }

const decemberRepaymentsChange = () => {
    const percentageChange = ((totalDebt - initialDebt) / Math.abs(totalDebt)) * 100;
    
    const monetaryChange = initialDebt - totalDebt;

    let result = `${monetaryChange.toFixed(2)} (${percentageChange.toFixed(2)}%)`

    return result
}

const novemberRepaymentsChange = () => {
    const percentageChange = ((totalDebt - initialDebt) / Math.abs(totalDebt)) * 100;
    
    const monetaryChange = initialDebt - totalDebt;

    let result = `${monetaryChange.toFixed(2)} (${percentageChange.toFixed(2)}%)`

    return result
}

function renderCard() {
    const section = document.getElementById('decCardSection');

    let cardHtml = `
        <div class="grid">
            <div class="grid-item">
                <span class="card-span">
                    <h2 class="heading">December Debt Report</h2>
                    <p class="note">(-£${decemberRepaymentsChange()})</p>
                </span>
                <div class="card">
                    <div class="content">
                        <p class="date">12 December, 2023</p>
                        <h3>New total debt: £${totalDebt}</h3>
                        <p class="note">Initial debt: £${initialDebt}.</p>
                        <br>
                        <button id="go">Lets go</button>
                    </div>
                </div>
            </div>
        </div>`;

    section.innerHTML = cardHtml;

    let button = document.getElementById('go');
    button.addEventListener('click', function () {
        // Get the existing content element
        const contentElement = section.querySelector('.content');

        // Create a new container for stats content
        const statsContent = document.createElement('div');

        // Append stats content to the container
        statsContent.innerHTML = '<h2>Stats</h2>';
        const statsParagraphs = displayStats().querySelectorAll('p');
        statsParagraphs.forEach(paragraph => {
            statsContent.appendChild(paragraph);
        });

        // Append the new stats container to the existing content
        contentElement.appendChild(statsContent);
    
        // Hide the button
        button.style.display = 'none';
    });
}

function renderNovCard() {
    const section = document.getElementById('novCardSection');

    let cardHtml = `
        <div class="grid">
            <div class="grid-item">
                <span class="card-span">
                    <h2 class="heading">December Debt Report</h2>
                    <p class="note">(-£${novemberRepaymentsChange()})</p>
                </span>
                <div class="card">
                    <div class="content">
                        <p class="date">12 December, 2023</p>
                        <h3>New total debt: £${totalDebt}</h3>
                        <p class="note">Initial debt: £${initialDebt}.</p>
                        <br>
                        <button id="go">Lets go</button>
                    </div>
                </div>
            </div>
        </div>`;

    section.innerHTML = cardHtml;

    let button = document.getElementById('go');
    button.addEventListener('click', function () {
        // Get the existing content element
        const contentElement = section.querySelector('.content');

        // Create a new container for stats content
        const statsContent = document.createElement('div');

        // Append stats content to the container
        statsContent.innerHTML = '<h2>Stats</h2>';
        const statsParagraphs = displayStats().querySelectorAll('p');
        statsParagraphs.forEach(paragraph => {
            statsContent.appendChild(paragraph);
        });

        // Append the new stats container to the existing content
        contentElement.appendChild(statsContent);
    
        // Hide the button
        button.style.display = 'none';
    });
}
// Rest of the code remains the same


function displayStats() {
    // Create a container for stats content
    const statsContent = document.createElement('div');

    // Append stats content to the container
    statsContent.innerHTML = `
        <p>Total debt: ${totalDebt}</p>
        <p>Gross monthly income: ${grossIncome}</p>
        <p>Monthly general spending: ${sumOfMySpending}</p>
        <p>Monthly debt repayments: ${monthlyDebtRepayments}</p>
        <p>Net monthly income: ${disposableIncome}</p>
        <p>Non-priority debt: ${sumOfNonPriorityDebts}</p>
        <p>Priority debt: ${sumOfPriorityDebts}</p>
    `;

    return statsContent;
}





  
  
  
  
  
  
  function main() {
    displayStats()
    // displayAdvice()
    displayBalances()
    renderCard()
    renderNovCard()
  }
  
  main()