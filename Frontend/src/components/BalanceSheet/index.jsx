import React, { useState } from "react";
import "./BalanceSheet.css";

const BalanceSheet = ({ selectedProvider, onSubmit }) => {
  const [balanceSheetData, setBalanceSheetData] = useState([]);
  const isDisabled = !balanceSheetData?.length;

  const fetchBalanceSheet = async () => {
    const response = await fetch(
      `http://localhost:5001/api/balanceSheet?provider=${selectedProvider}`
    );
    const data = await response.json();
    setBalanceSheetData(data);
  };

  const handleSubmit = () => {
    onSubmit(balanceSheetData);
  };

  return (
    <div className="balance-sheet">
      <h2 className="form-title">Balance Sheet</h2>
      <button className="fetch-button" onClick={fetchBalanceSheet}>
        Fetch Balance Sheet
      </button>
      <div className="table-container">
        {balanceSheetData?.length ? (
          <table className="balance-sheet-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Month</th>
                <th>Profit/Loss</th>
                <th>Assets</th>
              </tr>
            </thead>
            <tbody>
              {balanceSheetData?.map((item, index) => (
                <tr key={index}>
                  <td>{item.year}</td>
                  <td>{item.month}</td>
                  <td>{item.profitOrLoss}</td>
                  <td>{item.assetsValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
      <button
        disabled={isDisabled}
        className="submit-button"
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};

export default BalanceSheet;
