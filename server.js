// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Sample data for charity care programs
const charityCarePrograms = [
  {
    hospital: 'Hospital A',
    eligibilityCriteria: 'Annual income below $25,000',
    applicationAssistance: 'Available'
  },
  {
    hospital: 'Hospital B',
    eligibilityCriteria: 'Uninsured or underinsured',
    applicationAssistance: 'Available'
  },
  // Add more sample data as needed
];

// Endpoint to check charity care eligibility
app.post('/charity-care-check', (req, res) => {
  const { annualIncome, insuranceStatus } = req.body;

  // Logic to check eligibility
  const eligiblePrograms = charityCarePrograms.filter(program => {
    // Sample logic, replace with actual eligibility criteria check
    if (annualIncome <= 25000 && insuranceStatus === 'uninsured') {
      return true;
    }
    return false;
  });

  res.json({ eligiblePrograms });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
