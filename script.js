// Sample data for finance records
const expenses = [
    { name: "Rent", amount: 1200 },
    { name: "Groceries", amount: 150 },
    { name: "Utilities", amount: 100 },
];

const incomes = [
    { name: "Salary", amount: 3000 },
    { name: "Freelance", amount: 500 },
];

// Function to display finance records (expenses and incomes)
function displayFinanceData() {
    const expenseList = document.getElementById("expense-list");
    const incomeList = document.getElementById("income-list");

    // Display expenses
    expenses.forEach(expense => {
        const expenseItem = document.createElement("li");
        expenseItem.textContent = `${expense.name}: $${expense.amount}`;
        expenseItem.style.color = '#D32F2F'; // Red for expenses
        expenseList.appendChild(expenseItem);
    });

    // Display incomes
    incomes.forEach(income => {
        const incomeItem = document.createElement("li");
        incomeItem.textContent = `${income.name}: $${income.amount}`;
        incomeItem.style.color = '#388E3C'; // Green for incomes
        incomeList.appendChild(incomeItem);
    });
}

// Function to calculate total expenses, total income, and balance
function calculateTotals() {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
    const balance = totalIncome - totalExpenses;

    return { totalExpenses, totalIncome, balance };
}

// Function to update the summary values
function updateSummary() {
    const { totalExpenses, totalIncome, balance } = calculateTotals();
    
    document.getElementById("total-income").textContent = `$${totalIncome}`;
    document.getElementById("total-expenses").textContent = `$${totalExpenses}`;
    document.getElementById("balance").textContent = `$${balance}`;
}

// Function to display budget tracker chart
function displayBudgetChart() {
    const { totalExpenses, totalIncome, balance } = calculateTotals();

    const ctx = document.getElementById("budget-chart").getContext("2d");
    const budgetChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Income', 'Expenses', 'Balance'],
            datasets: [{
                label: 'Amount ($)',
                data: [totalIncome, totalExpenses, balance],
                backgroundColor: ['#388E3C', '#D32F2F', '#FF9800'],
                borderColor: ['#388E3C', '#D32F2F', '#FF9800'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize the finance tracker app
function initFinanceTracker() {
    displayFinanceData();
    updateSummary();
    displayBudgetChart();
}

initFinanceTracker();
