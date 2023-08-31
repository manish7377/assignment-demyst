const express = require("express");
const bodyParser = require("body-parser");
const mockBalanceSheet = require("./mockBalanceSheet"); // Sample balance sheet data
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/api/balanceSheet", (req, res) => {
  const selectedProvider = req.query.provider;
  const balanceSheet = mockBalanceSheet[selectedProvider] || [];
  res.json(balanceSheet);
});

app.post("/api/getAssessmentValue", (req, res) => {
  const balanceSheetData = req.body.balanceSheetData;
  const businessDetails= req.body.businessDetails;

  let preAssessmentValue = 20;
  const hasProfitLast12Months = balanceSheetData
    .slice(0, 12)
    .every((item) => item.profitOrLoss > 0);

  if (hasProfitLast12Months) {
    preAssessmentValue = 60;
  }

  const averageAssetValue =
    balanceSheetData
      .slice(0, 12)
      .reduce((sum, item) => sum + item.assetsValue, 0) / 12;

  if (averageAssetValue > businessDetails.loanAmount) {
    preAssessmentValue = 100;
  }

  res.json(preAssessmentValue);
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
