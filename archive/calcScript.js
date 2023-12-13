        const $ = (id) => document.getElementById(id);

        const calcRatio = (fdmc, tvl, fees, revenue) => {
            let ratio = fdmc / tvl || fees || revenue;
            return ratio;
        }

        function processValuation() {
            const fdmc = parseFloat($('fdmc').value) || 10770000;
            const tvl = parseFloat($('tvl').value) || 78400000;
            const fees = parseFloat($('fees').value) || 750354;
            const revenue = parseFloat($('revenue').value) || 4470000;

            const ratioTVL = calcRatio(fdmc, tvl);
            const ratioPE = calcRatio(fdmc, revenue);
            const ratioPF = calcRatio(fdmc, fees);

            if(isNaN(fdmc) || isNaN(tvl) || isNaN(fees) || isNaN(revenue)) {
                alert("All entries must be numerical.");
            } else if(fdmc <= 0 || tvl <= 0 || fees <= 0 || revenue <= 0) {
                alert("Entries must be greater than zero");
            } else {
                let statement = `FdMC/TVL: ${ratioTVL.toPrecision(2)}; FdMC/Revenue ${ratioPE.toPrecision(3)}; FdMC/Fees: ${ratioPF.toPrecision(3)}.`
                $('valuation').value = statement
            }

        }





        const performCalculation = (amount, interest, duration) => {
            const futureValue = amount * Math.pow(1 + interest, duration);
            //const formattedValue = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(futureValue);
            //const outputStatement = `${amount} invested at a ${interest * 100}% APY for ${duration} years = ${performCalculation(amount, interest, duration)}`
            return futureValue;
        }

        const processComp = () => {
            const amount = parseFloat($('amount').value);
            const interest = parseFloat($('interest').value) / 100;
            const duration = parseInt($('duration').value);

            if(isNaN(amount) || isNaN(interest) || isNaN(duration)) {
                alert("All entries must be numerical.");
            } else if (amount <= 0 || interest <= 0 || duration <= 0) {
                alert("Entries must be greater than zero");
            } else {
                $("peroni").value = performCalculation(amount, interest, duration);
            }
        };





        const calculateMilesPerGallon = (miles, gallons) => {
            var mpg = (miles / gallons);
            mpg = mpg.toFixed(1);
            return mpg;
        }

        const processEntries = () => {
            const miles = parseFloat($('miles').value);
            const gallons = parseFloat($('gallons').value);

            if(isNaN(miles) || isNaN(gallons)) {
                alert("Both entries must be numerical values.");
            } else if (miles <= 0 || gallons <= 0) {
                alert("Both entries must be greater than naught.");
            } else {
                $("mpg").value = calculateMilesPerGallon(miles, gallons);
            }
        };


        const calculateMix = (milliLiters, ratio) => {
            let mix = milliLiters * ratio;
            return mix;
        }

        const processMix = () => {
            const liters = parseInt($('liters').value);
            const milliLiters = liters * 1000;
            const ratio = 1 / parseInt($('ratio').value);

            if(isNaN(liters) || isNaN(ratio)) {
                alert("Both entries must be numerical values!");
            } else if (liters <= 0 || ratio <= 0) {
                alert("Both entries must have a value greater than zero.");
            } else {
                $("mix").value = `${calculateMix(milliLiters, ratio)} mL of your preferred oil`
            }
        }

        $("calculateMPG").addEventListener('click', processEntries);
        $("submitMixCalc").addEventListener('click', processMix);
        $("processComp").addEventListener('click', processComp);
        $('processValuation').addEventListener('click', processValuation)

            






        const jsLampEl = document.getElementById('jsLamp');
        jsLampEl.innerText = new Date();
        jsLampEl.style.fontSize = "10px";
        jsLampEl.style.color = "ghostwhite"
