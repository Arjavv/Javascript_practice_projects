
 const expenseInput = document.getElementById("Expense");
  const submitBtn = document.getElementById("Submit");
  const distributionDiv = document.getElementById("distribution");

  // Create object to store totals
  const totals = {
    Food: 0,
    Travel: 0,
    Personal: 0,
    Accomodation: 0,
  };

  // Listen for submit button click
  submitBtn.addEventListener("click", () => {
    const amount = parseFloat(expenseInput.value);

    // Get selected category
    const category = document.querySelector('input[name="category"]:checked');

    // Validation
    if (!amount || !category) {
      alert("Please enter an expense and select a category.");
      return;
    }

    const categoryName = category.id;

    // Update total
    totals[categoryName] += amount;

    // Show updated distribution
    updateDistribution();
    
    // Clear input
    expenseInput.value = "";
    category.checked = false;
  });

  // Function to update UI
  function updateDistribution() {
    distributionDiv.innerHTML = `
      <ul>
        <li>Food: ₹${totals.Food.toFixed(2)}</li>
        <li>Travel: ₹${totals.Travel.toFixed(2)}</li>
        <li>Personal Expense: ₹${totals.Personal.toFixed(2)}</li>
        <li>Accomodation: ₹${totals.Accomodation.toFixed(2)}</li>
      </ul>
    `;
  }

  
