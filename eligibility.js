// frontend/eligibility.js

document.getElementById('eligibility-form').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get input values
  const annualIncome = document.getElementById('annual-income').value;
  const insuranceStatus = document.getElementById('insurance-status').value;

  try {
    // Send POST request to backend endpoint
    const response = await fetch('/charity-care-check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ annualIncome, insuranceStatus })
    });

    // Parse JSON response
    const data = await response.json();
    // Display eligibility status
    displayEligibility(data.eligiblePrograms);
  } catch (error) {
    console.error('Error:', error);
  }
});

function displayEligibility(programs) {
  const statusDiv = document.getElementById('eligibility-status');
  statusDiv.innerHTML = '';

  if (programs.length === 0) {
    statusDiv.textContent = 'You are not eligible for any charity care programs.';
  } else {
    const eligiblePrograms = programs.map(program => program.hospital).join(', ');
    statusDiv.textContent = `Congratulations! You are eligible for charity care programs at the following hospitals: ${eligiblePrograms}`;
  }
}
