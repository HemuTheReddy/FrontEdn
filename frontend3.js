<script src=""  >
    function calculateRetirementSavings() {
        // Get the input values from the form
        const currentAge = parseFloat(document.getElementById("current-age").value);
        const retirementAge = parseFloat(document.getElementById("retirement-age").value);
        const lifeExpectancy = parseFloat(document.getElementById("life-expectancy").value) || 0;
        const currentSavings = parseFloat(document.getElementById("current-savings").value);
        const annualContribution = parseFloat(document.getElementById("annual-contribution").value);
        const rateOfReturn = parseFloat(document.getElementById("rate-of-return").value);
        const inflationRate = parseFloat(document.getElementById("inflation-rate").value);
        const retirementIncomeGoal = parseFloat(document.getElementById("retirement-income-goal").value);
        const otherIncome = parseFloat(document.getElementById("other-income").value) || 0;
        const taxRate = parseFloat(document.getElementById("tax-rate").value) || 0;
        const socialSecurity = parseFloat(document.getElementById("social-security").value) || 0;
        const healthCareCosts = parseFloat(document.getElementById("health-care-costs").value) || 0;
        const debt = parseFloat(document.getElementById("debt").value) || 0;
        const postRetirementWork = parseFloat(document.getElementById("post-retirement-work").value) || 0;

        // Calculate the number of years until retirement
        const yearsUntilRetirement = retirementAge - currentAge;

        // Calculate the number of years in retirement
        const yearsInRetirement = lifeExpectancy - retirementAge;

        // Calculate the retirement savings needed
        const futureRetirementIncome = retirementIncomeGoal - otherIncome - socialSecurity - healthCareCosts - debt + postRetirementWork;
        const presentValueOfFutureRetirementIncome = futureRetirementIncome / Math.pow(1 + inflationRate/100, yearsInRetirement);
        const retirementSavingsNeeded = presentValueOfFutureRetirementIncome / ((1 - Math.pow(1 + rateOfReturn/100, -yearsInRetirement)) / (rateOfReturn/100));

        // Calculate the total savings needed
        const totalSavingsNeeded = retirementSavingsNeeded * Math.pow(1 + rateOfReturn/100, yearsUntilRetirement) - currentSavings;
        const annualSavingsNeeded = totalSavingsNeeded / ((1 - Math.pow(1 + rateOfReturn/100, -yearsUntilRetirement)) / (rateOfReturn/100));

        // Calculate the annual after-tax contribution needed
        const annualAfterTaxContributionNeeded = annualSavingsNeeded / (1 - taxRate/100);

        // Display the results
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = `
            <p>Total Savings Needed: $${totalSavingsNeeded.toFixed(2)}</p>
            <p>Annual Savings Needed: $${annualSavingsNeeded.toFixed(2)}</p>
            <p>Annual After-Tax Contribution Needed: $${annualAfterTaxContributionNeeded.toFixed(2)}</p>
        `;

        // Prevent the form from submitting
        return false;
    }
</script>

